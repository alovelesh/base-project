import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
/*import { finalize, tap } from 'rxjs/operators';*/

import { CommonService } from '../service/common.service';

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {

	constructor(private commonService : CommonService){}

	intercept(req: HttpRequest<any>, next: HttpHandler) {

		// const started = Date.now();
	    // let ok: string;

		// Clone the request to add the new header.
		const authReq = req.clone({ setHeaders: { 
			'x-access-token' : this.commonService.getAuthToken()
		    } 
		});

		//send the newly created request
		return next.handle(authReq);
		// extend server response observable with logging
		/*return next.handle(authReq)
	      .pipe(
	        // Log when response observable either completes or errors
	        finalize(() => {
	          console.log(`${req.method} "${req.urlWithParams}"
	             ${ok} in ${Date.now() - started} ms.`);
	        })
	      );*/
	  }
}