import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaymentComponentComponent } from './components/payment-component/payment-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderCheckOutComponent } from './components/header-check-out/header-check-out.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankYouComponent } from './components/Thank-You/thank-you.component';
import { CheckoutPageComponent } from './components/checkOut/checkout-page.component';
import { shoppingRouting } from './shopping-routing.module';
import { Route, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard.service';



@NgModule({
  declarations: [
    PaymentComponentComponent,
    CheckoutPageComponent,
    HeaderCheckOutComponent,
    ThankYouComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    shoppingRouting,
    ReactiveFormsModule,
    HttpClientModule,
    shoppingRouting,


  ],
 
})
export class ShoppingModule { }


