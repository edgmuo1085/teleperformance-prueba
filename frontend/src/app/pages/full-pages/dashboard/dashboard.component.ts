import { Component, OnInit } from '@angular/core';
import { TokenInfoService } from 'src/app/services/token-info.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private tokenInfoService: TokenInfoService) { }

	ngOnInit(): void {
		console.log(this.tokenInfoService.user);
	}

}
