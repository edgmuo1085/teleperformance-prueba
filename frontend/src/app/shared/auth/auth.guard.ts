import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenInfoService } from 'src/app/services/token-info.service';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private router: Router, private tokenInfoService: TokenInfoService) { }
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		if (this.checkToken()) {
			return true;
		} else {
			localStorage.clear();
			Swal.fire(
				'Error',
				'Su Token ha caducado...',
				'error'
			);
			this.router.navigate(['pages/login']);
			return false;
		}
	}

	private checkToken = (): boolean => {
		if (localStorage.getItem('access_tk')) {
			let fecha_actual = new Date();
			/* 
			console.log(fecha_actual);
			console.log(this.tokenInfoService.exp);
			 */
			if (fecha_actual > this.tokenInfoService.exp) {
				console.log(false);
				
				return false
			} else {
				console.log(true);
				return true
			}
		}
		return false
	}
}
