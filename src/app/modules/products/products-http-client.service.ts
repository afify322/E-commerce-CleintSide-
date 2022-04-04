import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpClientService {
  url: string = "https://hedoom.herokuapp.com";
  collectionId=""
  constructor(private http: HttpClient) {}

  getProductById(id: string | null) {
    return this.http.get<any>(this.url + "/products/" + id);
  }
  
  findProductByCategory(id: string | null,page:any,limit:any){
console.log(limit,page);

    return this.http.get<any>(this.url + "/products/category/" + id+"?"+"page="+page+"&limit="+limit);
    // return this.http.get<any>(this.url +"/products/category/62365f0d0e8f88a7d38d88d0?limit=8&page=2");


  }

  productSearch(search: string | null,collectionId:string|null,page:number|null,limit:number|null){
    return this.http.get<any>(this.url + "/products/category/"+collectionId + search+"&page="+page+"&limit="+limit);
  }
  findCategoryById(id:string|null){
    return this.http.get<any>(this.url+ "/category/" + id);
  }
  addFavourite(id:string){
    let user=localStorage.getItem("user");
    let body={productId:id, userId:user}
return this.http.post(this.url+"/user/addFavourite",body);
  }
}
