import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsHttpClientService } from '../products-http-client.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  collectionID: string | null = " ";
  collectionName: string | null = " ";
  collectionImage: string | null = " ";
  constructor(private route: ActivatedRoute, private httpClient: ProductsHttpClientService) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe({
      next: (r) => this.collectionID = r.get("category"),
    });
    this.httpClient.findCategoryById(this.collectionID).subscribe(data => {
      this.collectionName = data.category.name;
      this.collectionImage = data.category.image;
    });
  }

}
