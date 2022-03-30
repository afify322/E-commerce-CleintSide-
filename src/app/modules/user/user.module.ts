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
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UserRouting } from './user-routing';
import { UsersDashboardComponent } from './admin/users-dashboard/users-dashboard.component';
import { OrdersDashboardComponent } from './admin/orders-dashboard/orders-dashboard.component';



@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    UsersDashboardComponent,
    OrdersDashboardComponent
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
    MatMenuModule

  ]
})
export class UserModule { }
