import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  parentsearchedProducts:any;
  parentsearchsize=0
  parentPageToSearch:number=1;
  // dataBack:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
