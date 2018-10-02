import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICategory } from '../model/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  category$: Observable<string>;
  categoryName: string;
  products: Product[] = []
  
  constructor(private _prodService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.category$ = this.route.queryParams.pipe(map(param => param.category));

    this.category$.pipe(switchMap(category => {
      this.categoryName = category;
      return this._prodService.filterProductByCategory(category)
    })).subscribe(prods => {
      this.products = prods;
    });
  }

}
