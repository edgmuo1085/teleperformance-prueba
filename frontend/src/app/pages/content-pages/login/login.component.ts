import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { TokenInfoService } from 'src/app/services/token-info.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	title: string = 'Login';
	loginForm!: FormGroup;
	subscription!: Subscription;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private formBuilder: FormBuilder,
		private loginService: LoginService
	) {

	}

	setControls = () => {
		this.loginForm = this.formBuilder.group({
			username: [, [Validators.required]],
			password: [, [Validators.required]]
		})
	}

	ngOnInit(): void {
		this.checkSesion();
		this.setControls();
	}

	get controls() {
		return this.loginForm.controls;
	}

	ngOnDestroy() {
		if (this.subscription) this.subscription.unsubscribe();
	}

	checkSesion() {
		if (this.loginService.checkToken()) this.router.navigate(['full/dashboard']);
	}

	iniciarSesion() {
		if (this.loginForm.valid) {
			this.subscription = this.loginService.login(this.loginForm.value).subscribe(resp => {

			},
				err => {
					this.notificacion(err.error.data);
				}
			)
		}
	}

	notificacion = (message: any) => {
		Swal.fire(
			'Advertencia',
			`${message}`,
			'warning'
		);
	}

}
