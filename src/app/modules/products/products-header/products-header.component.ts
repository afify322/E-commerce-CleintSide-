import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  collectionID:null|string="";
  constructor(private x:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.x.queryParamMap.subscribe({
         next: (v) => this.collectionID=v.get("category"),
   });
  }

}
