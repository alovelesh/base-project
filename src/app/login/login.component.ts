import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ReusableFunctionsService } from '../service/reusable_functions.service';
import { CommonService } from '../service/common.service';
//import { LoginResponse } from '../models/login_response.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent /*implements OnInit*/ {
    @ViewChild('f') loginForm : NgForm;
    loading : boolean = false;
    returnUrl: string;
    //demousers : Array<any>;

    constructor(
        private route: ActivatedRoute,
        //private router: Router,
        // private http : HttpClient,
        private reusableFunctionsService : ReusableFunctionsService,
        private commonService : CommonService
        ) { }

    //ngOnInit() {
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // if (localStorage.getItem('currentUser')) {
        //     (this.returnUrl === "login") && (this.returnUrl = '/');
        //     this.router.navigate([this.returnUrl]);
        // }
   // }

    login() {
        // Set loading true
        this.loading = true;
        this.commonService.getLoginData('/api/usermanagement/login',this.loginForm.value, this.route.snapshot.queryParams['returnUrl']).then((result : any)=>{
            // Set loading false
            this.loading = false;
            result && this.reusableFunctionsService.showNotification({
                message : result.data.error && result.data.error.message,
                type : 'error'
            })
          })
    }
}