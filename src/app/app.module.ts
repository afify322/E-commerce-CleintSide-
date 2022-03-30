import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routes:Routes=[
  {path:'home',loadChildren:()=> import('./modules/home/home.module').then(m => m.HomeModule)},
  {path:'products',loadChildren:()=> import('./modules/products/products.module').then(m => m.ProductsModule)},
  {path:'user',loadChildren:()=> import('./modules/user/user.module').then(m => m.UserModule)},
  {path:'checkout',loadChildren:()=> import('./modules/shopping/shopping.module').then(m => m.ShoppingModule)},
  // {path:'UserProfile',loadChildren:()=> import('./modules/user/user.module').then(m => m.UserModule)}

]
  
@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes,{
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy'
    }),
    BrowserAnimationsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
