import { Product } from "./product";

export interface ICart {
    id: string,
    items: {productId: number, quantity: number}[]
}