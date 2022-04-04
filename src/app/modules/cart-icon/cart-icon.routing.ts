import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartIconComponent } from "./cart-icon.component";

const routes:Routes=[{
    path:'cartIcon',component:CartIconComponent
}]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CartIconRouting{}