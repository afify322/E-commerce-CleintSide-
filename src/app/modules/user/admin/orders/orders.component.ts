import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { OrderItem } from 'src/app/modules/shopping/Models/order-item';
import { OrdersService } from 'src/app/modules/shopping/services/orders.service';
import { AdminService } from '../../admin.service';
import { status } from '../orders/orders.model';
import { MatTableDataSource } from "@angular/material/table";
import { Order } from 'src/app/modules/shopping/Models/order';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit,OnChanges {
  displayedColumns: string[] = ['User Name','Order Items', 'Status', 'Shipping Address', 'Total Price','Cancel','Confirm','Delete'];
  orders:Order[] | undefined;
  orderItems:OrderItem[]|any;
  dataSource:any;
  constructor(private adminService:AdminService) { }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
   // this.adminService.
    this.adminService.getOrders('').subscribe({
      next:(data:any)=>{ 
        
        this.dataSource=new MatTableDataSource<Order>(data.orders);
      },
      error:(err)=>{
        console.log(err);    
      }
    })
  }

  confirmOrder(id:string){
    this.adminService.updateOrder(id,status.completed).subscribe({
      next:(data:any)=>{
        console.log(data);
        
        let index=this.dataSource.filteredData.findIndex((x:any)=>x._id ==data.order._id);        
        this.dataSource.filteredData[index].status="completed";
        this.dataSource._updateChangeSubscription();

      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  cancelOrder(id:string){
    this.adminService.updateOrder(id,status.canceled).subscribe({
      next:(data:any)=>{
        console.log(data);
        
       let index=this.dataSource.filteredData.findIndex((x:any)=>x._id ===data.order._id);

       this.dataSource.filteredData[index].status="canceled";
       this.dataSource._updateChangeSubscription();

      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  deleteOrder(id:string){
    this.adminService.deleteOrder(id).subscribe({
      next:(data:any)=>{
        
        let index=this.dataSource.filteredData.findIndex((x:any)=>x._id ===data.order._id);
        this.dataSource.filteredData.splice(index,1);
        this.dataSource._updateChangeSubscription();
        
        console.log({data},{index});
      },
      error:(err)=>{
console.log(err);

      }
    })
  }

  ngOnChanges(){

  }


}
