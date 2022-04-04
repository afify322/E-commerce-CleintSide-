import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from './modules/shared/shared.module';
import { ErrorPageComponent } from './modules/shared/error-page/error-page.component';
import { Interceptor } from './modules/core/interceptors.service';

const routes:Routes=[
  {path:'' ,pathMatch:'full',redirectTo:'/home'},
  {path:'home',loadChildren:()=> import('./modules/home/home.module').then(m => m.HomeModule)},
  {path:'products',loadChildren:()=> import('./modules/products/products.module').then(m => m.ProductsModule)},
  {path:'user',loadChildren:()=> import('./modules/user/user.module').then(m => m.UserModule)},
  {path:'checkout',loadChildren:()=> import('./modules/shopping/shopping.module').then(m => m.ShoppingModule)},
  {path:'auth',loadChildren:()=> import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path:'**',component:ErrorPageComponent},
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
    BrowserAnimationsModule,
    SharedModule
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},{provide:HTTP_INTERCEPTORS,useClass:Interceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
