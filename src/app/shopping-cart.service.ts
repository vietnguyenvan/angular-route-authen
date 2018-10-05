import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { ICart } from './model/cart';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
  

    constructor() { }

    getCart(): ICart {
        let cartId = this.getOrCreateCartId();
        return shoppingCarts.find(cart => cart.id == cartId);
    }

    create(): string {
        let cartId = shoppingCarts.push(
            {
                id: (shoppingCarts.length + 1).toString(), 
                items: [] 
            });
        
        return cartId.toString();
    }

    getOrCreateCartId(): string{
        let cartId = localStorage.getItem("cartId");
        if (cartId && shoppingCarts.find(cart => cart.id == cartId)) return cartId;
        
        cartId = this.create();
        localStorage.setItem("cartId", cartId);
        return cartId;
    }

    getQuantity(product: Product): number {
        return 0;
    }

    updateItemQuantity(product: Product, num: number) {
        let cart = this.getCart();
        console.log(cart);
        let item = cart.items.find(item => item.productId == product.id);


        if (!item) cart.items.push({
            productId: product.id,
            quantity: 1
        });
        else item.quantity += num;
    }
}

export const shoppingCarts: ICart[] = [
    {
        id: "1",
        items: [
            {
                productId: 1,
                quantity: 2
            }, 
            {
                productId: 2,
                quantity: 1
            }
        ]
    }
]
