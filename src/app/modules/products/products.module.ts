import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {ProductsRouting} from './products-routing';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { SearchComponent } from './search/search.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductsHttpClientService } from './products-http-client.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsComponent,
    SearchComponent,
    ProductsHeaderComponent
    
  ],
  imports: [
    CommonModule,
    ProductsRouting,
    SharedModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers:[ProductsHttpClientService]

})
export class ProductsModule { }
