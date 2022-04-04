import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UserRouting } from './user-routing';
import { UsersDashboardComponent } from './admin/users-dashboard/users-dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserProfileComponent } from './User/Components/user-profile/user-profile.component';
import { UserFavoriteListComponent } from './User/Components/user-favorite-list/user-favorite-list.component';
import { UserOrdersComponent } from './User/Components/user-orders/user-orders.component';
import { UserOrderheaderUserProfileComponent } from './User/Components/user-orderheader-user-profile/user-orderheader-user-profile.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminService } from './admin.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './admin/products/products.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    UsersDashboardComponent,

    UserProfileComponent,
    UserFavoriteListComponent,
    UserOrdersComponent,
    UserOrderheaderUserProfileComponent,
    OrdersComponent,
    ProductsComponent,
    
  ],
  imports: [
    UserRouting,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    SharedModule,
    MatTableModule,
   MDBBootstrapModule,
   HttpClientModule,
   MatPaginatorModule,
   NgxSmartModalModule.forChild(),
   RouterModule,
    FormsModule,
    ReactiveFormsModule 


  ],
  providers:[
    AdminService,HttpClient
  ]
})
export class UserModule { }
