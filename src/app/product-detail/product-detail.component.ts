import { ProductService } from './../service/product.service';
import { ICategory } from './../model/category';
import { CategoryService } from './../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';


const PRODUCT_BASE = {
    title: "",
    imageUrl: ""
}
@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    categories: ICategory[];
    product: Product = {};

    constructor(private _categoryService: CategoryService,
         private route: ActivatedRoute,
         private _prodService: ProductService,
         private router:Router) { }

    ngOnInit() {
        let productId = this.route.snapshot.paramMap.get("id");

        if (!isNaN(Number(productId))) {
            this._prodService.getProductById(Number(productId)).subscribe(prod => {
                this.product = prod;
            });
        } else {
            this.product = Object.assign({}, PRODUCT_BASE);
        }
        
        this._categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

    onSubmit() {
        this._prodService.save(this.product);
        this.router.navigateByUrl("/products");

    }

}
