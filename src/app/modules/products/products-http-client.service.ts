import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpClientService {
  url: string = "https://hedoom.herokuapp.com";
  constructor(private http: HttpClient) {}

  getProductById(id: string | null) {
    return this.http.get<any>(this.url + "/products/" + id);
  }
  findProductByCategory(id: string | null){
    return this.http.get<any>(this.url + "/products/category/" + id)
  }

  productSearch(search: string | null){
    console.log(this.url + "/products" + search);
    return this.http.get<any>(this.url + "/products" + search);
  }
  findCategoryById(id:string|null){
    return this.http.get<any>(this.url+ "/category/" + id);
  }
}
