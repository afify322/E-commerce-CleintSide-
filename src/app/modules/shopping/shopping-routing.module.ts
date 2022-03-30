import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CheckoutPageComponent } from "./components/checkOut/checkout-page.component";
import { ThankYouComponent } from "./components/Thank-You/thank-you.component";

const routes: Route[] = [
    { path:'ThankYou', component: ThankYouComponent },
    {
        path:'', component:CheckoutPageComponent
    },
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class shoppingRouting { }