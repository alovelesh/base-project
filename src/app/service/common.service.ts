import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ReusableFunctionsService } from './reusable_functions.service';
// import { LoginResponse } from '../models/login_response.model';
// Mat Snack Bar default configuration



@Injectable()
export class CommonService {
    constructor(
        private http : HttpClient,
        private reusableFunctionsService : ReusableFunctionsService,
        private router : Router
    ){}

    isSideBarExpand : boolean = true;
	//Store Application Menus after login and clear after logout
    appMenus : {name : string, path : string}[] = [];

    getLoginData(url, data, ret_url) {
        (ret_url === '/login') && (ret_url = '');
        return new Promise((resolve, reject)=>{
        this.http.post(url,data).subscribe((result: any)=>{
                let isSideBarExpand = localStorage.isSideBarExpand;
                this.isSideBarExpand = (isSideBarExpand !== undefined) ? JSON.parse(localStorage.isSideBarExpand) : !!result.data.isSideBarExpand;
                result.data.token && (localStorage['auth-token'] = result.data.token);
                this.appMenus = this.reusableFunctionsService.getNestedChildren(result.data.appMenus, 'controller_id', 'parent_controller_id');
                resolve(false/*{status:'OK', data : result}*/);
                this.router.navigate([ret_url || '']);
            },(err)=>{
                resolve({status:'KO', data : err});
            })
        })
    }

    // Get auth token from localstorage
    getAuthToken = () => localStorage['auth-token'] || '';

    // getRoutingData() {
    //     let routingResult = [{pathUrl:"", componentName:"HomeComponent", canActivatedGaurd:[], children: [{path : '', component : "WelcomeComponent"}, {path : 'main', component : "MainSection"}] }]
    //   return routingResult
    // }
}