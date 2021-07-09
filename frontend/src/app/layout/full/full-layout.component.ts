import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-full-layout',
	templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

	titulo_menu: string = 'Dashboard';
	constructor() { }

	ngOnInit(): void {
	}

	changeTitulo = (e: any) => {
		this.titulo_menu = e;
	}

}
