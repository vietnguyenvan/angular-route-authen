import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService:AuthenService) { }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isLogedIn() {
    return this.authService.isLogedIn();
  }

}
