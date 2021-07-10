import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserInfo } from 'src/app/interfaces';
import { LoginService } from 'src/app/services/login.service';
import { TokenInfoService } from 'src/app/services/token-info.service';

export interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
	role: string;
}

export const ROUTES: RouteInfo[] = [
	{ path: 'full/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '', role: 'ROLE_ADMIN' },
	{ path: 'full/perfil', title: 'Perfil', icon: 'nc-diamond', class: '', role: 'ROLE_ADMIN' },
	{ path: 'full/admin', title: 'Administrador', icon: 'nc-diamond', class: '', role: 'ROLE_ADMIN' },
	{ path: 'full/usuario', title: 'Usuario', icon: 'nc-diamond', class: '', role: 'ROLE_USER' }

];

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	@Output() titulo_menu = new EventEmitter
	menuItems: Array<any> = [];
	user!: UserInfo

	constructor(
		public loginService: LoginService,
		private tokenInfoService: TokenInfoService
	) { this.setUserInfo() }

	ngOnInit() {
		this.menuItems = ROUTES.filter(menuItem => menuItem);
	}

	setUserInfo = () => {
		this.user = this.tokenInfoService.user;
	}

	changeTitulo = (titulo: string) => {
		this.titulo_menu.emit(titulo);
	}

}
