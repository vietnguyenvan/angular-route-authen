import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() { }

    getAll(): Observable<Product[]> {
        return of(products);
    }

    getProductById(id: number): Observable<Product> {
        return  of(products.find(prod => prod.id === id));
    }

    filterProductByTitle(query: string): Observable<Product[]> {
        if (query !== "") 
            return  of(products.filter(prod => prod.title.toLowerCase().includes(query)));
        return this.getAll();
    }

    filterProductByCategory(category: string) {
        if (category) 
            return  of(products.filter(prod => prod.category === category));
        return this.getAll();
    }

    save(product: Product): void {
        let index = products.findIndex(prod => prod.id === product.id);
        products.splice(index, 1, product);
        console.log("update success");
        
    }
}

export const products: Product[] = [
    {
        id: 1,
        title: "White Bread",
        price: 100,
        category: "Bread",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG"
    },
    {
        id: 2,
        title: "No-Knead Bread",
        price: 150,
        category: "Bread",
        imageUrl: "https://d2gk7xgygi98cy.cloudfront.net/1360-3-large.jpg"
    },
    {
        id: 3,
        title: "Chocolate and meringue cream layer cake",
        price: 150,
        category: "Cake",
        imageUrl: "https://img.taste.com.au/decVmkuu/taste/2017/03/chocolate-meringue-layer-cake-124699-1.jpg"
    },
    {
        id: 4,
        title: "Rosewater & raspberry sponge cake",
        price: 150,
        category: "Cake",
        imageUrl: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/04/rosewater-raspberry-sponge-cake.jpg?itok=xTddhFJ9"
    },
    {
        id: 5,
        title: "Stir Fry Egg Noodles",
        price: 150,
        category: "Noodle",
        imageUrl: "https://supervalu.ie/thumbnail/720x400/var/files/good-food-karma/recipe/48779/egg-noodle-stir-fry-recipe-main.jpg?fill=1"
    },
]
