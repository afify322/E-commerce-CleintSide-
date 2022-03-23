import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PreviewCartComponent } from './preview-cart/preview-cart.component';
import { ModalComponent } from './modal/modal.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PreviewCartComponent,
    ModalComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[  HeaderComponent,
    FooterComponent,
    PreviewCartComponent,
    ModalComponent,
    LoadingSpinnerComponent]
})
export class SharedModule { }
