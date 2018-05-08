import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { CommonService } from '../service/common.service';

@Injectable()

export class LoginResolver implements Resolve<any> {
	
	constructor(private commonService : CommonService, private router : Router) {
		// code...
	}

	resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
		if (!localStorage['auth-token']) 
			return true;
		return this.commonService.getLoginData('/api/usermanagement/loginByToken',{token : localStorage['auth-token']}, route.queryParams['returnUrl'])
		// return new Promise((resolve)=>{
	 //        this.commonService.getLoginData('/api/usermanagement/loginByToken',{token : localStorage['auth-token']}).then(()=>{
	 //            resolve(false);
		// 		this.router.navigate(['']);
	 //          },()=> {
	 //             resolve(true);
	 //        })
		// })
	}
}