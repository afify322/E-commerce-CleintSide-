import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
const routes:Routes=[
  {path:'home',loadChildren:()=> import('./modules/home/home.module').then(m => m.HomeModule)},
  {path:'products',loadChildren:()=> import('./modules/products/products.module').then(m => m.ProductsModule)},
  {path:'user',loadChildren:()=> import('./modules/user/user.module').then(m => m.UserModule)}]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy'
    })
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
