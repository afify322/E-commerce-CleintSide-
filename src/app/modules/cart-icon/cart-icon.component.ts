import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { CartItem } from '../shopping/Models/cart';
import { cartService } from '../shopping/services/cart.service';
import { OrdersService } from '../shopping/services/orders.service';

@Component({
  selector: 'orders-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']

})
export class CartIconComponent implements OnInit {

  cartCount : any = 0;
  public product : any = [];
  constructor(private cartservice : cartService , private router : Router ,private orderService :OrdersService) { }

  ngOnInit(): void {
    this.cartservice.cart$.subscribe((cart)=>{
      console.log(cart);
      this.cartCount = cart.items.length;

    })
    // this.cartCount=this.cartservice.getCart().items?.length;

   
  }
  // public _getCartDetails():any{
  //   return this.cartservice.cart$.pipe().subscribe(respCart =>{
  //     respCart.items.forEach((cartItem :any)=>{
  //       console.log(cartItem)
  //     })
  //   })
  // }
 backToShop(){
  this.router.navigate(['/home'])
 }
//  deleteCartItem(cartItem : CartItem){
//   this.cartservice.deleteCartItem(cartItem.productId)
//  }
deleteCartItem(cartItem : CartItem){
   this.cartservice.deleteCartItem(cartItem.productId);
}
}
