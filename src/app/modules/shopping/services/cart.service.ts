import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart, CartItem, CartItemDetailed } from '../Models/cart';

export const CART_KEY = 'cart';
@Injectable({
    providedIn: 'root'
})

export class cartService {
    cartItemArr :  any = [{productId:"62346670e2e59eb905f97786",quantity:5},{productId:"62346670e2e59eb905f97789",quantity:2}]
    cart$ : BehaviorSubject<any> = new BehaviorSubject(this.getCart());
    constructor() { }

    /* initCartLocalStorage(){
        let cart : any = this.getCart();
        if(!cart){
        
        let initialCartJson = JSON.stringify([cart]);
        localStorage.setItem(CART_KEY ,initialCartJson)
    }
    else{
    this.cart$.next(cart);
    }
    } */
    getCart(): []{
        // const cart : Cart ={
        //     items: this.cartItemArr,
        // };
        let cartJsonString:any= localStorage.getItem(CART_KEY);
        if(!cartJsonString){
            return [];
        }
        let cart :[] = JSON.parse(cartJsonString);
        return cart;
    }

    
  
    setCartItem(cartItem : any): any{
        let cart:any = this.getCart();
      
        //console.log(cart);
       // console.log({input:cartItem});
        if(cart.length!=0){
            const cartItemExist = cart?.find((item:any)=>item.productId === cartItem.productId);
          
            
            if(cartItemExist){
                
               let newcart= cart?.map((item :any) =>{
                    if(item.productId === cartItem.productId && cartItem.quantity !== undefined){
                        item.quantity = item.quantity + cartItem.quantity;
                        item.price=+item.price + +(cartItem.price*cartItem.quantity)
                        return item;
                    }
                    else{
                        return item;
                    }
                    
                });
                
                localStorage.removeItem("cart");
                localStorage.setItem("cart",JSON.stringify(newcart));
            }
            else{
              
                
                    cart.push(cartItem);
                let CartJson = JSON.stringify(cart);
                localStorage.setItem("cart" ,CartJson)
                var tet=localStorage.getItem("cart" )


                this.cart$.next(cart);
                console.log(tet);
                return cart;
             }
        }else{

            cart.push(cartItem);
            let CartJson = JSON.stringify([cartItem]);
            localStorage.setItem("cart" ,CartJson)
                this.cart$.next(cart);

                return cart;
        }
    }
    deleteCartItem(productId :any){
        let cart  =this.getCart();
        let newCart =cart?.filter((item:any)=>{
            item.productId !==productId
        });
       
        let CartJson = JSON.stringify(cart);
        localStorage.setItem(CART_KEY ,CartJson)
        this.cart$.next(cart);

    }
}
