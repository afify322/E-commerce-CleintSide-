import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent: EventEmitter<Array<any>> = new EventEmitter();
  @Input() searchString: string = "";
  searchedProducts:any[] = ["hi","hello"];

  constructor() { }
  // constructor(private x: ActivatedRoute, private HttpClient: ProductsHttpClientService) {
  //   
  // }

  ngOnInit(): void {


  }
  search() {
    // this.HttpClient.productSearch(search).subscribe(products=>{
    //   this.searchedProducts=products;
    // })
    this.searchEvent.emit(this.searchedProducts);
  }


}
