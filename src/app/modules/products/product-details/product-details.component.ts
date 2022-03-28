
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsHttpClientService } from '../products-http-client.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product: any = {};
  public productId: string | null = " ";
 public quantity: number = 0 

  constructor(private route: ActivatedRoute, private httpClient: ProductsHttpClientService) {
    this.productId = this.route.snapshot.paramMap.get("id");
    this.httpClient.getProductById(this.productId).subscribe((data: any) => this.product = data.product);
  }

  ngOnInit(): void {
  }

  quantityPlus(): void {
    this.quantity++;
  }
  quantityMinus(): void {
    if(this.quantity==0)return;
    this.quantity--;
  }
}
