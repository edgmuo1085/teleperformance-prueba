import { Injectable } from '@angular/core';
import jwtdecode from 'jwt-decode';
import { TokenInfo } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class TokenInfoService {

	tokenInfo!: TokenInfo;

	constructor() {
		const data = localStorage.getItem('access_tk');
		if (data) this.setData(jwtdecode(data));
	}

	setData = (data: any) => {
		this.tokenInfo = data;
	}

	get role() {
		return this.tokenInfo.user.rol;
	}
	
	get user() {
		return this.tokenInfo.user;
	}

	get exp() {
		return new Date(this.tokenInfo.exp * 1000);
	}

	get iat() {
		return new Date(this.tokenInfo.iat * 1000);
	}
}
