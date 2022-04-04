import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CartIconComponent } from "./cart-icon.component";
import { CartIconRouting } from "./cart-icon.routing";

@NgModule({
    declarations:[
        CartIconComponent
    ],
    imports : [
        CommonModule,
        CartIconRouting
    ]
})
export class CartIconModule{}