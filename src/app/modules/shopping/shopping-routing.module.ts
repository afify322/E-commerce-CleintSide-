import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuardService } from "../core/auth-guard.service";
import { CheckoutPageComponent } from "./components/checkOut/checkout-page.component";
import { ThankYouComponent } from "./components/Thank-You/thank-you.component";

const routes: Route[] = [
    { path:'ThankYou', component: ThankYouComponent,canActivate:[AuthGuardService] },
    {
        path:'', component:CheckoutPageComponent
    }
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class shoppingRouting { }