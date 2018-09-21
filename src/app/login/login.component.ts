import { AuthenService } from '../service/authen.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	constructor(private service: AuthenService) { }

	login() {
		this.service.login().subscribe(token => {
			localStorage.setItem("token", token);
		})
	}
}
