import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	@Input() titulo_menu!: string;
	body: HTMLElement;
	toggle;
	sidebarVisible: boolean;
	layer: HTMLElement;
	toggleButton: any;
	misc = {
		navbar_menu_visible: 0,
		active_collapse: true,
		disabled_collapse_init: 0,
		sidebar_mini_active: false,
		hide_sidebar_active: true
	};
	isCollapsed = true;

	constructor(
		private renderer: Renderer2,
		private element: ElementRef
	) {
		this.body = document.getElementsByTagName('body')[0];
		this.toggle = document.getElementsByClassName('navbar-toggler')[0];
		this.layer = document.createElement('div');
		this.sidebarVisible = false;
	}

	ngOnInit() {

		this.toggleButton = this.element.nativeElement.getElementsByClassName('navbar-toggler')[0];
		this.sidebarClose();
	}

	sidebarToggle() {
		if (this.sidebarVisible === false) {
			this.sidebarOpen();
		} else {
			this.sidebarClose();
		}
	}

	sidebarOpen() {
		const toggleButton = this.toggleButton;
		const html = document.getElementsByTagName('html')[0];
		const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
		setTimeout(function () {
			toggleButton.classList.add('toggled');
		}, 500);

		html.classList.add('nav-open');
		if (window.innerWidth < 991) {
			mainPanel.style.position = 'fixed';
		}
		this.sidebarVisible = true;
	};
	
	sidebarClose() {
		const html = document.getElementsByTagName('html')[0];
		const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
		if (window.innerWidth < 991) {
			setTimeout(function () {
				mainPanel.style.position = '';
			}, 500);
		}
		this.toggleButton.classList.remove('toggled');
		this.sidebarVisible = false;
		html.classList.remove('nav-open');
	};

	collapse() {
		this.isCollapsed = !this.isCollapsed;
		const navbar = document.getElementsByTagName('nav')[0];
		//console.log(navbar);
		if (!this.isCollapsed) {
			navbar.classList.remove('navbar-transparent');
			navbar.classList.add('bg-white');
		} else {
			navbar.classList.add('navbar-transparent');
			navbar.classList.remove('bg-white');
		}

	}
}
