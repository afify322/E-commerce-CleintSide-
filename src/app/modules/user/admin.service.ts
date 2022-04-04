import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './Model/User';
import { status } from "./admin/orders/orders.model";
import { Product } from './admin/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = "https://hedoom.herokuapp.com";
  OrdersUri="https://hedoom.herokuapp.com/order/";
  ProductsUri="https://hedoom.herokuapp.com/products";
  
  constructor(private http: HttpClient) {}


  getUsers(page:number|null,limit:number|null){
    return this.http.get<any>(this.url + "/user"+"?page="+page+"&limit="+limit);
  }
  deleteUser(id:string){
    console.log("serv Delete");
    console.log(id);
    
    return this.http.delete<any>(this.url + "/user/" + id);

  }
  getOrders(){
   return this.http.get(this.OrdersUri);
  }
  updateOrder(id:string,status:status){
    return this.http.put(this.OrdersUri+id,{status:status});
  }
  deleteOrder(id:string){
    return this.http.delete(this.OrdersUri+id)
  }
  getProducts(){
    return this.http.get(this.ProductsUri);
   }
   getProductById(id:string){
    return this.http.get(this.ProductsUri+"/"+id)
  }
   updateProduct(id:string,body:any){
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
