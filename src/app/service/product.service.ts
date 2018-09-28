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
        categoryId: 1,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG"
    },
    {
        id: 2,
        title: "No-Knead Bread",
        price: 150,
        categoryId: 1,
        imageUrl: "https://d2gk7xgygi98cy.cloudfront.net/1360-3-large.jpg"
    },
]
