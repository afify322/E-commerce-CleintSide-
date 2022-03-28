import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsHttpClientService } from '../products-http-client.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']

})
export class ProductsListComponent implements OnInit {
  @Input() searchedProducts: any[] = []
  products: any = [];
  collectionID: string | null = "";
  collectionName: any = "";
  public page: number = 1;
  totalProducts: string = '20';
  constructor(private x: ActivatedRoute, private httpClient: ProductsHttpClientService) {

  }
  
  ngOnInit(): void {

    this.x.queryParamMap.subscribe
      ({
        next: (v) => this.collectionID = v.get("category")
      });
    this.httpClient.findCategoryById(this.collectionID).subscribe((data: any) => this.collectionName = data.category.name);
    this.httpClient.findProductByCategory(this.collectionID).subscribe((data: any) => this.products = data.products);


  }
  ngOnChanges(): void {

    this.products = this.searchedProducts;
    this.totalProducts = `${this.searchedProducts.length}`;
  }

}


