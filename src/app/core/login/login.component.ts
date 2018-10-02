import { AuthenService } from '../authen.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

	returnUrl:string;
	
	constructor(private service: AuthenService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
		console.log(this.returnUrl);
		
	}
	
	login() {
		this.service.login().subscribe(token => {
			localStorage.setItem("token", token);
			this.router.navigate([this.returnUrl]);
		})
	}
}
