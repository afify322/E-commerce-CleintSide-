import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Routes,Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchInput:string='';
  constructor(private searchSubject:AdminService,private route:ActivatedRoute,private router:Router) { }
  searchForm=new FormGroup({
   search:new FormControl('') 
  })
  ngOnInit(): void {
  }

  getData(){
    
  this.searchInput= this.searchForm.value.search=="" ? "" : this.searchForm.value.search;
    this.searchSubject.searchSubject.next(this.searchInput);
    if(this.router.url.includes('orders')){
      this.router.navigate(['/user/admin/orders']);
    }
    else if(this.router.url.includes('product')){
      this.router.navigate(['/user/admin/products']);   
    }
    else{
      this.router.navigate(['/user/admin/users']);
    }
   
    
   // this.router.navigate(['/']); 
   }
   clearService(){
     this.searchForm.setValue({'search':''})
     this.searchSubject.searchSubject.next('');
   }
}
