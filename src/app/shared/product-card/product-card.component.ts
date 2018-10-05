import { ICart } from './../../model/cart';
import { ShoppingCartService } from './../../shopping-cart.service';
import { Product } from '../../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  
  @Input('product') product:Product;
  @Input('showAction') showAction:boolean = true;
  @Input('shopping-cart') cart:ICart;

  constructor(private cartService: ShoppingCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.updateItemQuantity(this.product, 1);
  }

  removeToCart() {
    this.cartService.updateItemQuantity(this.product, -1);
  }

  getQuantity() {
    if (!this.cart) return 0;
    let item = this.cart.items.find(item => item.productId == this.product.id);
    return item ? item.quantity : 0;
  }
}