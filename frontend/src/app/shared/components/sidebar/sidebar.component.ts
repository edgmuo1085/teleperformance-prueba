import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

export interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}

export const ROUTES: RouteInfo[] = [
	{ path: 'full/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
	{ path: 'full/perfil', title: 'Perfil', icon: 'nc-diamond', class: '' }
];

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	@Output() titulo_menu = new EventEmitter
	menuItems: Array<any> = [];

	constructor(
		public loginService: LoginService
	) { }

	ngOnInit() {
		this.menuItems = ROUTES.filter(menuItem => menuItem);
	}

	changeTitulo = (titulo: string) => {
		this.titulo_menu.emit(titulo);
	}

}
