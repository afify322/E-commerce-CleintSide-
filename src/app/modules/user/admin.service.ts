import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './Model/User';
import { status } from "./admin/orders/orders.model";
import { Product } from './admin/products/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = "https://hedoom.herokuapp.com";
  OrdersUri="https://hedoom.herokuapp.com/order/";
  ProductsUri="https://hedoom.herokuapp.com/products";
  searchSubject=new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}


  getUsers(page:number|null,limit:number|null,name:any){
    return this.http.get<any>(this.url + "/user"+"?page="+page+"&limit="+limit+"&name="+name);
  }
  deleteUser(id:string){
    console.log("serv Delete");
    console.log(id);
    
    return this.http.delete<any>(this.url + "/user/" + id);

  }
  getOrders(search:any){
   return this.http.get(this.OrdersUri+`/?`);
  }
  updateOrder(id:string,status:status){
    return this.http.put(this.OrdersUri+id,{status:status});
  }
  deleteOrder(id:string){
    return this.http.delete(this.OrdersUri+id)
  }
  getProducts(search:any){
    return this.http.get(this.ProductsUri+`/?name=${search}`);
   }
   getProductById(id:string){
    return this.http.get(this.ProductsUri+"/"+id)
  }
   updateProduct(id:string,body:any){
     delete body.image;
     return this.http.patch(this.ProductsUri+"/"+id,body);
   }
   deleteProduct(id:string){
     return this.http.delete(this.ProductsUri+"/"+id)
   }
   addproduct(body:FormData){
     return this.http.post(this.url+"/products",body)
   }
   getCategories(){
     return this.http.get(this.url+"/category")
   }
}
