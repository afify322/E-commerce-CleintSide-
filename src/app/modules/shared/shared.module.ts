import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PreviewCartComponent } from './preview-cart/preview-cart.component';
import { ModalComponent } from './modal/modal.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PreviewCartComponent,
    ModalComponent,
    LoadingSpinnerComponent,
    ErrorPageComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[  HeaderComponent,
    FooterComponent,
    PreviewCartComponent,
    ModalComponent,
    LoadingSpinnerComponent,
    SpinnerComponent
    
  ],
  providers:[]
 
})
export class SharedModule { }
