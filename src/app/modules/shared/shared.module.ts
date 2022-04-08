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
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from "@angular/material/chips";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PreviewCartComponent,
    ModalComponent,
    LoadingSpinnerComponent,
    ErrorPageComponent,
    SpinnerComponent,
    CategoryNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatChipsModule
    
  ],
  exports:[  HeaderComponent,
    FooterComponent,
    PreviewCartComponent,
    ModalComponent,
    LoadingSpinnerComponent,
    SpinnerComponent,
    CategoryNavComponent
    
  ],
  providers:[]
 
})
export class SharedModule { }
