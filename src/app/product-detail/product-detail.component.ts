import { ICategory } from './../model/category';
import { CategoryService } from './../service/category.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    categories: ICategory[];
    product: IProduct;

    constructor(private _categoryService: CategoryService) { }

    ngOnInit() {
        this._categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

}
