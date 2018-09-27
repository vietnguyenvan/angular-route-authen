import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private _prodService: ProductService) { }

  ngOnInit() {
    this._prodService.getAll().subscribe(prods => {
      this.products = prods;
    })
  }

}
