
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product-class.model';
import { ProductsHttpClientService } from '../products-http-client.service';
import { CartItem } from '../../shopping/Models/cart';
import { cartService } from '../../shopping/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product?: Product;
  public productId: string | null = " ";
  public quantity: number = 0 
  cart:any;

  constructor(private route: ActivatedRoute, private httpClient: ProductsHttpClientService,private cartService: cartService) {
    this.productId = this.route.snapshot.paramMap.get("id");
    this.httpClient.getProductById(this.productId).subscribe((data: any) => this.product = data.product);
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe({
      next: (data) => {
        this.cart = data;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  quantityPlus(): void {
    this.quantity++;
  }
  quantityMinus(): void {
    if(this.quantity==0)return;
    this.quantity--;
  }
  addProductToCart(product: any) {
    if (this.quantity > 0) {
      let cartItem: any = {
        productId: this.productId,
        quantity: this.quantity,
        price: this.product!.price * this.quantity,
        name: this.product?.name
      }
      this.cartService.setCartItem(cartItem)
    }
    else {
      window.alert('if you want to add to cart .. your quantity must be more than 0')
    }
  }
}
