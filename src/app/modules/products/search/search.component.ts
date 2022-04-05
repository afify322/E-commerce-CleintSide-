import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-class.model';
import { ProductsHttpClientService } from '../products-http-client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges {
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  @Output() searchSizeEvent:EventEmitter<number> = new EventEmitter();
  searchSize:number=0;
  @Input()pageFromList:number=1;
  @Input() searchString: string|null = "";
  @Input() max: string|null = "max";
  @Input() min: string|null = "min";
  searchedProducts: Product[] = [];
  searchStringQuery:string|null = " ";
  FilterBy:string|null = "name";
  collectionID:string|null=''
  pageFromSearch:number|null=1;
  constructor( private route: ActivatedRoute,private httpClient: ProductsHttpClientService) {
    
  }

  ngOnInit(): void {


  }
  ngOnChanges(){
    
    if(this.pageFromList!=1){
      this.httpClient.productSearch(this.searchStringQuery,this.collectionID,this.pageFromList,5).subscribe((data: any) => {this.searchedProducts = data;
        this.searchEvent.emit(this.searchedProducts);
      }); 
    }
  }
  search() {
    this.pageFromSearch=1;
    
    if(this.FilterBy=="rating"||this.FilterBy=="price"){
    if(this.min=="min" && this.max=="max"){this.max="1000"; this.min="0"}
    this.searchStringQuery="?"+this.FilterBy+"Max"+"="+this.max+"&"+this.FilterBy+"Min"+"="+this.min;

    // this.max="max"
    // this.min="min"
    }
    else{
    this.searchStringQuery="?"+this.FilterBy+"="+this.searchString;

    }
    this.route.queryParamMap.subscribe({
      next: (r) => this.collectionID = r.get("category"),
    });
    this.httpClient.productSearch(this.searchStringQuery,this.collectionID,1,6).subscribe((data: any) => {this.searchedProducts = data;
      
      this.searchSize=data.size;
      this.searchEvent.emit(this.searchedProducts);
      this.searchSizeEvent.emit(this.searchSize);     
    }); 
  }
  updateFilterBy(by:string){
    this.max="max"
    this.min="min"
    this.FilterBy=by;
  }


}
