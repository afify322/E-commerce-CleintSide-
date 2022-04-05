import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private router:Router) { }
  login(body : any){
    return this.http.post("https://hedoom.herokuapp.com/user/login" , 
    body
    );
    
  }
  signUp(body:any){
    return this.http.post("https://hedoom.herokuapp.com/user" , 
    body
    );
}
logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('cart')
  
  this.router.navigate(["/home"]);
}
isLoggedIn(){
  if(localStorage.getItem('token')){
    return true;
  }
  return false;
}
currentUser(){
  const helper = new JwtHelperService();
  let token=localStorage.getItem('token');
  if(!token) return;
  return helper.decodeToken(token);
}
isAdmin(){
  const helper = new JwtHelperService();
  let token=localStorage.getItem('token');
  if(!token) return false;
  let tokenobj=helper.decodeToken(token);
  if(tokenobj.isAdmin)return true;
  return false;

}
}
