import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





const routes:Routes=[
  {path:'home',loadChildren:()=> import('./modules/home/home.module').then(m => m.HomeModule)},
  {path:'products',loadChildren:()=> import('./modules/products/products.module').then(m => m.ProductsModule)},
  {path:'user',loadChildren:()=> import('./modules/user/user.module').then(m => m.UserModule)},
  {path:'checkout',loadChildren:()=> import('./modules/shopping/shopping.module').then(m => m.ShoppingModule)}

]
  
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======

>>>>>>> 18a12c5349d7828f4ffa1e59533969f621ea8353
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy'
    }),
    BrowserAnimationsModule,


  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
