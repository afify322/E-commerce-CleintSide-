import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaymentComponentComponent } from './payment/payment-component/payment-component.component';
import { CheckoutPageComponent } from './checkout-page.component';
import { checkoutRouting } from './checkout-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderCheckOutComponent } from './header-check-out/header-check-out.component';



@NgModule({
  declarations: [
    PaymentComponentComponent,
    CheckoutPageComponent,
    HeaderCheckOutComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    checkoutRouting,
    ReactiveFormsModule

  ]
})
export class ShoppingModule { }
