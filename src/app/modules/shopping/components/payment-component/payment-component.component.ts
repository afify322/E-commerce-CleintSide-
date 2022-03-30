import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart, CartItem } from '../../Models/cart';
import { Order } from '../../Models/order';
import { OrderItem } from '../../Models/order-item';
import { CartService } from '../../services/cart.service';
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
  userId = '6234b1d08b1c0e34977db2ae';
  cart: Cart = new Cart;


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

  constructor(private cartService: CartService,  private ordersService: OrdersService, private router: Router,) { }

  ngOnInit() {

    this.cart= this.cartService.getCart();
    this.cartItems = this.cart.items;

  }



  sumbitOrder() {
    // this.router.navigate(['/ThankYou']);

    if (!this.ProductOrderForm.valid) { return };
    console.log(this.ProductOrderForm.value);
    const order: Order = {
      orderItems: this.cartItems,
      shippingAddress1: this.ProductOrderForm.value.Address1,
      shippingAddress2: this.ProductOrderForm.value.Address2,
      city: this.ProductOrderForm.value.city,
      zip: this.ProductOrderForm.value.ZIP,
      country: this.ProductOrderForm.value.Country,
      phone: this.ProductOrderForm.value.phone,
      status: "pending",
      totalPrice:200,
      userId: this.userId,
    };


    this.ordersService.createOrder(order).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['/checkout/ThankYou']);
      },
      error: (err) => {console.log(err)}
    });
 

  }

}