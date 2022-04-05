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
}
