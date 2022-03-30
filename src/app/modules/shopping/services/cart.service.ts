import { Injectable } from '@angular/core';
import { Cart, CartItem, CartItemDetailed } from '../Models/cart';

export const CART_KEY = 'cart';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    
    cartItemArr :  CartItem[] = [{productId:"62346670e2e59eb905f97786",quantity:5},{productId:"62346670e2e59eb905f97789",quantity:2}]
    constructor() { }


    getCart(): Cart{
        const cart : Cart ={
            items: this.cartItemArr,
        };

        return cart;
    }

}
