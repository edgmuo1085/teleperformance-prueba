import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenInfoService } from 'src/app/services/token-info.service';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class RolesGuard implements CanActivate, CanActivateChild {

	constructor(private route: Router, private tokenInfoService: TokenInfoService){}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


		let url: string = state.url;
		return this.checkUserLogin(next, url);
	}

	canActivateChild(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.canActivate(next, state);
	}

	checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
		if (localStorage.getItem('access_tk')) {

			const userRole = this.tokenInfoService.role;
			if (route.data.role && route.data.role.indexOf(userRole) === -1) {
				Swal.fire(
					'Error',
					'No tiene acceso a este menu',
					'error'
				);
				this.route.navigate(['/full/dashboard']);
				return false;
			}
			return true;
		}

		this.route.navigate(['/full/dashboard']);
		return false;
	}
}
