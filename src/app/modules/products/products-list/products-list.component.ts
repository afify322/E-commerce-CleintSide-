import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ProductsHttpClientService } from '../products-http-client.service';
import { NgxPaginationModule, PaginationControlsDirective, PaginationInstance, PaginatePipe, PaginationControlsComponent, PaginationService } from 'ngx-pagination';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']

})
export class ProductsListComponent implements OnInit {
  @Input() searchedProducts: any[] = []
  products = ["clothes", "df", "df", "df", "df", "df", "df", "df", "df", "df", "df", "df"];
  collectionID: string | null = "";
  collectionName: string | null = "";
  public page: number = 1;
  totalProducts: string = '20';

  constructor(private x: ActivatedRoute) {

  }
  // constructor(private x: ActivatedRoute, private HttpClient: ProductsHttpClientService) {
  //   // this.products=[];
  // }

  ngOnInit(): void {
  this.products = ["clothes", "df", "df", "df", "df", "df", "df", "df", "df", "df", "df", "df"];
    this.x.queryParamMap.subscribe({
      next: (v) => this.collectionID = v.get("category")
    });



    // this.HttpClient.findProductByCategory(this.collectionID).subscribe(products=>{
    //   this.products=products;
    //   this.totalProducts=products.length;
    // })

    // this.HttpClient.findCategoryById(this.collectionID).subscribe(category=>{
    //   this.collectionName=category.Name;
    // })
  }
  ngOnChanges(): void {
      console.log(this.searchedProducts);
      this.products = this.searchedProducts;
      this.totalProducts=`${this.searchedProducts.length}`;
  }
}


