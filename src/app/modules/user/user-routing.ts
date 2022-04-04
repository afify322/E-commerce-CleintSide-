import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../core/auth-guard.service";
import { AdminComponent } from "./admin/admin.component";
import { OrdersComponent } from "./admin/orders/orders.component";
import { ProductsComponent } from "./admin/products/products.component";
import { UsersDashboardComponent } from "./admin/users-dashboard/users-dashboard.component";
import { UserProfileComponent } from "./User/Components/user-profile/user-profile.component";


const routes: Routes = [
    {
        path: 'admin', component: AdminComponent ,
        children:[
            {path:'users', component:UsersDashboardComponent},
            {path:'orders', component:OrdersComponent},
            {path:'products', component:ProductsComponent},
        ],canActivate:[AuthGuardService]
    }
    ,
    {path:'profile', component:UserProfileComponent,canActivate:[AuthGuardService]}

]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRouting { }