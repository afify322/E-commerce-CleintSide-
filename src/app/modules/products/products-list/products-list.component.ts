import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-class.model';
import { ProductsHttpClientService } from '../products-http-client.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']

})
export class ProductsListComponent implements OnInit {
  collectionID: string | null = "";
  collectionName: string = "";

  products: Product[] = [];
  @Input() searchedProductsobj:any;
  @Input() page?: number;

  searchedProducts: Product[] = []
  @Input() searchedSize=0
  limit: number = 6;
  totalProducts: number = 20;

  dataBack: boolean = false
  // @Output() dataBackevent:EventEmitter<boolean> = new EventEmitter();
 @Output() pageToSearchEvent:EventEmitter<number> = new EventEmitter();

  constructor(private router: ActivatedRoute, private httpClient: ProductsHttpClientService) {

  }

  ngOnInit(): void {

    this.router.queryParamMap.subscribe
    ({
      next: (url) => this.collectionID = url.get("category")
    });

    this.httpClient.findCategoryById(this.collectionID).subscribe((data: any) => this.collectionName = data.category.name);

    this.httpClient.findProductByCategory(this.collectionID, this.page!, this.limit).subscribe((data: any) => {
      this.searchedProducts=[];
      this.products = data.products
      console.log(data.size);

      this.totalProducts = data.size;
      this.dataBack = true

      // this.dataBackevent.emit(this.dataBack);
    });


  }
  ngOnChanges(): void {
    console.log(this.page +"in list to update to one");
    this.searchedProducts=this.searchedProductsobj.products;
      this.products = this.searchedProducts;
      this.page=this.searchedProductsobj.page
      
      this.totalProducts = this.searchedProductsobj.size;
  }
  pageChanged(event: any) {
    this.page = event;
    console.log("pageChanged"+this.page);
    
    if(this.searchedProducts.length==0){
      this.httpClient.findProductByCategory(this.collectionID, this.page!, this.limit).subscribe((data: any) => {
        this.products = data.products
        this.totalProducts = data.size;
        this.dataBack = true
        
        // this.dataBackevent.emit(this.dataBack);
      });
    }
    else{
      console.log(this.page +"pagechanged to search products in product list");
      
      this.pageToSearchEvent.emit(this.page);
    }

  }
}


