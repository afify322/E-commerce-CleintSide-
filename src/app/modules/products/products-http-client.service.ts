import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpClientService {

  constructor(private http:HttpClient) {

   }
   findProductByCategory():Observable<any>{
     const url=""
     return this.http.get<any>(url);
   }

  //  findCategoryById(ID):Observable<any>{
  //    const url="categories/ID"
  //    return this.http.get<any>(url);
  //  }

 //  productSearch(search):Observable<any>{
  //    const url="categories/search"
  //    return this.http.get<any>(url);
  //  }
}
