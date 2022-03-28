import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsHttpClientService } from '../products-http-client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent: EventEmitter<Array<any>> = new EventEmitter();

  @Input() searchString: string|null = "";
  @Input() max: string|null = "6";
  @Input() min: string|null = "0";
  searchedProducts:any[] = [];
  searchStringQuery:string|null = " ";
  FilterBy:string|null = "name";
  constructor(private x: ActivatedRoute, private httpClient: ProductsHttpClientService) {
    
  }

  ngOnInit(): void {


  }
  search() {
    if(this.FilterBy=="price" && this.max=="6"){this.max="1000"}
    if(this.FilterBy=="rating"||this.FilterBy=="price"){
    this.searchStringQuery="?"+this.FilterBy+"Max"+"="+this.max+"&"+this.FilterBy+"Min"+"="+this.min;
    console.log(this.searchStringQuery);
    
    }
    else{
    this.searchStringQuery="?"+this.FilterBy+"="+this.searchString;
    }
    this.httpClient.productSearch(this.searchStringQuery).subscribe((data: any) => {this.searchedProducts = data.products;
      this.searchEvent.emit(this.searchedProducts);});
    
  }
  updateFilterBy(by:string){
    this.max="0"
    this.min="0"
    console.log(by);
    this.FilterBy=by;
  }


}
