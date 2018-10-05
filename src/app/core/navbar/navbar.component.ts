import { ShoppingCartService } from './../../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthenService, private cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  navbarOpen = false;

  countCartItems() {
    let cart = this.cartService.getCart();
    if (cart.items.length === 0) return 0;
    
    return cart.items.map(item => item.quantity).reduce((item1, item2) => item1 + item2);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isLogedIn() {
    return this.authService.isLogedIn();
  }

}
