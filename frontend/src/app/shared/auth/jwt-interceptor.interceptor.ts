import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";


@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

	constructor(
		private router: Router,
		private loginService: LoginService
	) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const access_tk: string | null = localStorage.getItem('access_tk');
		let req = request;
		if (access_tk) {
			req = request.clone({
				setHeaders: {
					authorization: `${access_tk}`
				}
			});
		}

		return next.handle(req)
			.pipe(
				catchError((err: HttpErrorResponse) => {
					if (err.status === 401) {
						this.loginService.logout();
						this.router.navigateByUrl('pages/login');
					}
					if (err.status === 500) {
						this.router.navigateByUrl('pages/login');
					}
					return throwError(err);
				})
			);
	}
}
