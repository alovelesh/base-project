import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CommonService } from '../service/common.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private http : HttpClient,
        private commonService : CommonService
        ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage['auth-token']) {
            // logged in so return true
            if(this.commonService.appMenus.length)
                return true;
            else {
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
            }
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }
}