import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtdecode from "jwt-decode";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserLogin } from 'src/app/interfaces/';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	urlApi!: string;
	constructor(private router: Router, private http: HttpClient) {
		this.urlApi = environment.apiRest + 'sesion';
	}

	login = (user: UserLogin): Observable<any> => {
		return this.http.post<any>(this.urlApi, user)
		.pipe(map(data => {
			this.setToken(data.data);
			this.router.navigate(['full/dashboard']);
			const payload: any = jwtdecode(data.data);
			console.log(payload);
			
			return 'Data';
		}));
		
	}

	setToken = (token: string) => {
		localStorage.setItem('access_tk', token);
	}

	checkToken = (): boolean => {
		return (localStorage.getItem("access_tk")) ? true : false;
	}

	logout = () => {
		localStorage.clear();
	}

	cerrarSesion = (): void => {
		Swal.fire({
			title: "Cerrar Sesión",
			text: "¿Esta seguro que desea salir del sistema?",
			showCancelButton: true,
			confirmButtonText: "Si",
			cancelButtonText: "Cancelar",
			buttonsStyling: true,
			reverseButtons: true
		}).then(result => {
			if (result.value) {
				localStorage.clear();
				this.router.navigate(['/pages/login']);
			}
		});
	}
}
