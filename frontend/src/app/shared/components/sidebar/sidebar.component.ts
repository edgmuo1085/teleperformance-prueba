import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}

export const ROUTES: RouteInfo[] = [
	{ path: 'full/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
	{ path: 'full/perfil', title: 'Icons', icon: 'nc-diamond', class: '' }
];

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	@Output() titulo_menu = new EventEmitter
	menuItems: Array<any> = [];

	ngOnInit() {
		this.menuItems = ROUTES.filter(menuItem => menuItem);
	}

	changeTitulo = (titulo: string) => {
		this.titulo_menu.emit(titulo);
	}

}
