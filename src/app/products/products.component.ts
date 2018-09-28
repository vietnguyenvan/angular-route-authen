import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Subject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  query: string = "";
  filter$ =new Subject<string>();

  constructor(private _prodService: ProductService) {
   }

  ngOnInit() {

    this._prodService.getAll().subscribe(prods => {
      this.products = prods;
    });

    this.filter$.pipe(debounceTime(500),
      distinctUntilChanged(),
      switchMap(filterText => {
        console.log(filterText);
        return this._prodService.filterProductByTitle(filterText.toLowerCase())
      }))
    .subscribe(prods => {
      console.log(prods);
      this.products = prods;
    });
  }

}
