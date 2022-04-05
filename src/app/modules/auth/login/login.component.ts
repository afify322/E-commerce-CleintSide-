import { Component, OnInit ,AfterViewInit, AfterContentInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterContentInit {
 login:any = FormGroup;
 users:any =[];
 loading:boolean=true;
  constructor(private fb:FormBuilder , private router :Router , private common :AuthService) { }
  ngAfterContentInit(): void {
    this.loading=false;
  }

  ngOnInit(): void {
    
    this.login = this.fb.group({
    email:["",Validators.compose([Validators.required , Validators.email])],
    password:["",Validators.required]
    });

  }
  
  
  error : any ;
  loginSubmit(){
    this.loading=true;
    if(this.login.status=== 'VALID'){

          this.common.login(this.login.value).subscribe({next:(data:any)=>{
            localStorage.setItem("token" , data.token);
            localStorage.setItem("user" , data.user._id);
            this.router.navigate(['home']);
          }, error : ()=>{
            this.loading=false;
            this.error = 'invalid email or password'
          }})
 
    }
   
}
}
