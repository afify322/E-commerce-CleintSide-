import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { Cart, CartItem } from '../../Models/cart';
import { Order } from '../../Models/order';
import { OrderItem } from '../../Models/order-item';
import { cartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-payment-component',
  templateUrl: './payment-component.component.html',
  styleUrls: ['./payment-component.component.css']
})
export class PaymentComponentComponent implements OnInit {


  countries: any = ['Egypt', 'America', 'Tennessee', 'Brazil', 'Australia', 'Canada'];
  totalPrice: any;
  cartItems :any;
  userId = '6247b73b51cb65acfee9f99f';
  cart!: [CartItem];


  ProductOrderForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    phone: new FormControl('',[Validators.required]),
    Country: new FormControl('', [Validators.required]),
    Address1: new FormControl('', [Validators.required]),
    Address2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    ZIP: new FormControl('', [Validators.required])

  });

  constructor(private cartService: cartService,  private ordersService: OrdersService, private router: Router,private auth:AuthService) { }

  ngOnInit() {

    this.cartItems= this.cartService.getCart();
   if(this.cartItems.length!=1){

     this.totalPrice=this.cartItems.reduce((a: { price: any; },b: { price: any; })=>{
       return +a.price + +b.price
   });
   }else{
     this.totalPrice=this.cartItems.reduce((a: { price: any; },b: { price: any; })=>{
      return +a.price + +b.price
   }).price;
   console.log(this.totalPrice);
   
  }
    
    

  }



  sumbitOrder() {

    if(!this.auth.isLoggedIn()){
      this.router.navigate(['/auth/login']);
      return;
    }
    if (!this.ProductOrderForm.valid) { return };
    const order: Order = {
      orderItems: this.cartItems,
      shippingAddress1: this.ProductOrderForm.value.Address1,
      shippingAddress2: this.ProductOrderForm.value.Address2,
      city: this.ProductOrderForm.value.city,
      zip: this.ProductOrderForm.value.ZIP,
      country: this.ProductOrderForm.value.Country,
      phone: this.ProductOrderForm.value.phone,
      status: "pending",
      userId: localStorage.getItem("user"),
    };

    this.ordersService.createOrder(order).subscribe({
      next: (response) => {
        localStorage.removeItem("cart");
        this.router.navigate(['/checkout/ThankYou']);
      },
      error: (err) => {console.log(err)}
    });
 

  }

  removeCart(){
    localStorage.removeItem("cart");
    this.router.navigate(['/home']);
  }

}
