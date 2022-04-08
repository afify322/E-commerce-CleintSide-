import { Component, Input, OnInit, ViewChild,OnDestroy,AfterViewInit } from '@angular/core';
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
export class ProductsComponent implements OnInit,OnDestroy,AfterViewInit {

  @Input() searchInput: string='';
  displayedColumns: string[] = ['Name','Description', 'Price', 'Category', 'Count In Stock','Details','Edit','Delete'];
  product!:Product;
  dataSource:any;
  editProduct:string="";
  errors:any;
  deleteID:string='';
  
  constructor(private adminService:AdminService,private modal:NgxSmartModalService) { }
  ngAfterViewInit(): void {
    this.paginator.nextPage
  }
  ngOnDestroy(): void {
    //this.adminService.searchSubject.unsubscribe();
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  confirmDelete(id:string){
  this.modal.open('confirm');
  this.deleteID=id;
  }
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
    this.adminService.searchSubject.subscribe({
      next:(data)=>{
        this.adminService.getProducts(data ||'').subscribe({
          next:(data:any)=>{ console.log(data);
          
            this.dataSource=new MatTableDataSource<Product>(data.products);
            this.dataSource._updateChangeSubscription();
          },
          error:(err)=>{
              
          }
        })

      }
    })
    this.adminService.searchSubject.next('');

  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      
      this.AddProductForm.patchValue({'image':file});
    }
  }
  openAddModal(){
    this.editProduct="";
      this.AddProductForm.patchValue({'name':'','description':'','price':0,'countInStock':0,'rating':0,'category':'','isFeatured':true});
    console.log("Dasd");
    
    this.modal.open("addModal");
  }


  openEditModal(id:string){
    this.editProduct=id;
    this.modal.open("addModal");
    this.modal.resetModalData("addModal");
    this.adminService.getProductById(id).subscribe({
      next:(data:any)=>{
let {name,description,price,countInStock,rating,category}=data.product;


        this.AddProductForm.setValue({'name':name,'description':description,'price':price,'countInStock':countInStock,'rating':rating,'category':category,'isFeatured':true,'image':'TEST'});
        
      },
  error:(err)=>{
   
    
  }})
  }

 
  addProduct(){
   /*  this.AddProductForm.setValue({'name':'','description':'','price':0,'countInStock':0,'rating':0,'category':'','isFeatured':true,'image':''});
    console.log("data");
 */
    if(this.AddProductForm.valid){
      if(this.editProduct!=""){
        this.adminService.updateProduct(this.editProduct,this.AddProductForm.value).subscribe({
          next:(data:any)=>{
            let index=this.dataSource.filteredData.findIndex((x:any)=>x._id==data.product._id);
            this.dataSource.filteredData.splice(index,1,data.product);
            this.dataSource._updateChangeSubscription();
            this.modal.resetModalData("addModal");
            this.modal.close("addModal");
            
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
  deleteProduct(){
    if(this.deleteID)
    this.adminService.deleteProduct(this.deleteID).subscribe({
      next:(data:any)=>{
      
        
        let index=this.dataSource.filteredData.findIndex((x:any)=>x._id ===data.product._id);
        this.dataSource.filteredData.splice(index,1);
        
        this.dataSource._updateChangeSubscription();
        this.deleteID='';
        
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
    
    this.adminService.getProducts('').subscribe({
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
