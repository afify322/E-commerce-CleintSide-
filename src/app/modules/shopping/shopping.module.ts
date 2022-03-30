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

const routes: Route[] = [
  { path:'ThankYou', component: ThankYouComponent },
  {
      path:'', component:ThankYouComponent
  },
 // { path:'ThankYou', component: ThankYouComponent },
]

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
    RouterModule.forChild(routes),

  ],
 
})
export class ShoppingModule { }


