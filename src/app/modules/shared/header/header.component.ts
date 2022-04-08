import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isAdmin:boolean=false;
isLoggedIn:boolean=false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.isAdmin=this.auth.isAdmin();
    this.isLoggedIn=this.auth.isLoggedIn();
    localStorage.removeItem
  }
  logout(){
  this.auth.logout();
  this.router.navigate(['/auth/login'])
  this.isAdmin=false;
  this.isLoggedIn=false;
  }

  goTo(page:string){
    console.log(page);
    
    if(page=='Men')return this.router.navigateByUrl('/products?category=62365f0d0e8f88a7d38d88d0');
    else if(page=='Women')return this.router.navigateByUrl('/products?category=62365f170e8f88a7d38d88d2')
    else if(page=='Kid')return this.router.navigateByUrl('/products?category=62365f1d0e8f88a7d38d88d4')
    else return this.router.navigateByUrl('/products/?category=62365f270e8f88a7d38d88d6')

  }
}
