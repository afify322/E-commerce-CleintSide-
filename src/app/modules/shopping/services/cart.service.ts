import { Injectable } from '@angular/core';
import { Cart, CartItem, CartItemDetailed } from '../Models/cart';

export const CART_KEY = 'cart';
@Injectable({
    providedIn: 'root'
})
export class CartService {
    
    cartItemArr :  CartItem[] = [{id:"6234b0f9399cfe48a5fb95ec",quantity:5},{id:"623a1fffde35b0bc3033cf15",quantity:2}]
    constructor() { }


    getCart(): Cart{
        const cart : Cart ={
            items: this.cartItemArr,
        };

        return cart;
    }

}
