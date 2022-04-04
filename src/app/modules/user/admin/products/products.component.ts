import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../../admin.service';
import { Product } from '../orders/orders.model';
import {  NgxSmartModalService } from 'ngx-smart-modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['Name','Description', 'Price', 'Category', 'Count In Stock','Details','Edit','Delete'];
  product!:Product;
  dataSource:any;
  editProduct:string="";
  errors:any;
  constructor(private adminService:AdminService,private modal:NgxSmartModalService) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  AddProductForm=new FormGroup({
    name:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required]),
    price:new FormControl(0,[Validators.required,Validators.min(20)]),
    category:new FormControl("",[Validators.required]),
    countInStock:new FormControl(0,[Validators.required]),
    rating:new FormControl("",[Validators.min(1),Validators.max(5)]),
    isFeatured:new FormControl(),
    image:new FormControl("",[Validators.required])
  })
  ngOnInit(): void {
    this.adminService.getProducts().subscribe({
      next:(data:any)=>{ console.log(data);
      
        this.dataSource=new MatTableDataSource<Product>(data.products);
        this.dataSource._updateChangeSubscription();
      },
      error:(err)=>{
        console.log(err);    
      }
    })
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      
      this.AddProductForm.patchValue({'image':file});
    }
  }
  openAddModal(){
    this.modal.open("addModal");
  }


  openEditModal(id:string){
    this.editProduct=id;
    this.modal.open("addModal");
    this.modal.resetModalData("addModal");
    this.adminService.getProductById(id).subscribe({
      next:(data:any)=>{
let {name,description,price,countInStock,rating,category}=data.product;


        this.AddProductForm.setValue({'name':name,'description':description,'price':price,'countInStock':countInStock,'rating':rating,'category':category,'isFeatured':true});

    },
  error:(err)=>{
    console.log(err);
    
  }})
  }

 
  addProduct(){

    if(this.AddProductForm.valid){
      if(this.editProduct!=""){
        this.adminService.updateProduct(this.editProduct,this.AddProductForm.value).subscribe({
          next:(data:any)=>{
            let index=this.dataSource.filteredData.findIndex((x:any)=>x._id==data.product._id);
            this.dataSource.filteredData.splice(index,1,data.product);
            this.dataSource._updateChangeSubscription();
            this.modal.resetModalData("addModal");
            this.modal.close("addModal");
            console.log(data);
            
            this.editProduct="";
            
          },
          error:(err)=>{
            console.log(err);
            this.editProduct="";
      
          }
        })
      }
      else{
        this.AddProductForm.value.isFeatured= Boolean(this.AddProductForm.value.isFeatured); 
        let formData = new FormData();
        formData.append('image', this.AddProductForm?.get('image')?.value);  
        formData.append('name', this.AddProductForm?.get('name')?.value);   
        formData.append('description', this.AddProductForm?.get('description')?.value);   
        formData.append('rating', this.AddProductForm?.get('rating')?.value);   
        formData.append('price', this.AddProductForm?.get('price')?.value);   
        formData.append('countInStock', this.AddProductForm?.get('countInStock')?.value); 
        formData.append('category', this.AddProductForm.get('category')?.value); 

          this.adminService.addproduct(formData).subscribe({
            next:(data:any)=>{
              this.dataSource.filteredData.push(data.product);
              this.dataSource._updateChangeSubscription();
              this.modal.resetModalData("addModal");
              this.modal.close("addModal");
              
            },
            error:(err)=>{
              console.log(err);
              
              this.errors=err.error;
              
            }
          })

      }

    }else{
      console.log(this.AddProductForm);
      
      this.errors=this.AddProductForm.errors
    }
    
  }
  deleteProduct(id:string){
    this.adminService.deleteProduct(id).subscribe({
      next:(data:any)=>{
        console.log(data);
        
        let index=this.dataSource.filteredData.findIndex((x:any)=>x._id ===data.product._id);
        this.dataSource.filteredData.splice(index,1);
        
        this.dataSource._updateChangeSubscription();
        
      },
      error:(err)=>{

      }
    })
  }

  getById( id:string){
    this.adminService.getProductById(id).subscribe({
      next:(data:any)=>{
        this.product=data.product;
        this.modal.open('modal');
      }, error:(err)=>{
        console.log(err);  
      }
    })
  }
  edit(id:string,body:Product){
    this.adminService.updateProduct(id,body).subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  ngOnChanges(){
    this.adminService.getProducts().subscribe({
      next:(data:any)=>{ console.log(data);
      
        this.dataSource=new MatTableDataSource<Product>(data.products);
      },
      error:(err)=>{
        console.log(err);    
      }
    })
  }

  getErrorMessage(error:string) {
    if (this.AddProductForm.invalid) {
      return this.AddProductForm.getError(error);
    }

  }
}
