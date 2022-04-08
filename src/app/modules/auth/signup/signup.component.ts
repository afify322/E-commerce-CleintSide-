import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loading:Boolean=false;
  profileForm:any = FormGroup;
  error:string="";
  constructor(private fb : FormBuilder , private router : Router , private service : AuthService){

  }
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email : ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      name :  ['', Validators.required],
      phone :  ['', Validators.required],
      password: ['', Validators.required],
      zip : ['',Validators.required],
      city :['', Validators.required],
      country : ['',Validators.required],
      apartment : ['',Validators.required],
      street : ['',Validators.required]
    })
  }
  onSubmit(){
    
    this.loading=true;
    if(this.profileForm.status=== 'VALID'){
      this.service.signUp(this.profileForm.value).subscribe({next:(data:any)=>{
        localStorage.setItem("token" , data.token);
        this.router.navigate(['/auth/login']);
      }, error : (data:any)=>{
        
       this.loading=false;
       
       this.error=data.error.error;
      }});

    }}
}
