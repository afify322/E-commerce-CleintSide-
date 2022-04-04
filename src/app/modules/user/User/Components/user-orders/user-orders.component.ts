import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Order } from 'src/app/modules/shopping/Models/order';
import { OrderItem } from 'src/app/modules/shopping/Models/order-item';
import { OrderUI } from 'src/app/modules/shopping/Models/OrderUI';
import { OrdersService } from 'src/app/modules/shopping/services/orders.service';
import { UserService } from '../../Services/User.service';


@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  displayedColumns: string[] = ['orderProductNames', 'status', 'totalPrice', 'dateOrdered'];
  clickedRows = new Set<Order>();
  orders: OrderUI[] = [];
  dataSource = new MatTableDataSource<OrderUI>();
  orderUIArr: OrderUI[] = [];
  UserId : string|null = "6247b73b51cb65acfee9f99f";


  constructor(private ordersService: OrdersService, private route:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.UserId=localStorage.getItem('user')?localStorage.getItem('user'):"6247b73b51cb65acfee9f99f";
    console.log(this.UserId);
    
    this.ordersService.getOrdersByUserID(this.UserId!).subscribe({
      next: (res) => {
        // console.log(res);
        let orders: Order[] = res.orders;
        for (let i = 0; i < orders.length; i++) {
          let orderUIObj = new OrderUI();
          orderUIObj.status = orders[i].status;
          orderUIObj.totalPrice = orders[i].totalPrice;
          orderUIObj.dateOrdered = orders[i].dateOrdered;
          orderUIObj.orderProductNames = this.MapProducetNAmes(orders[i].orderItems);
          this.orderUIArr.push(orderUIObj);
        }
        this.dataSource.data = this.orderUIArr;

      },
      error: (err) => {
        // console.log(err);
        // if(err.status)
        
        // this.userService.errorStatus = err.status;
        // this.userService.errMessage = err.error[Object.keys(err.error)[1]];
        // this.route.navigate(['/user/Error']);

      }
    });

  }


  MapProducetNAmes(orderItems?: OrderItem[]) {
    let productNames : any[] =[];
      orderItems?.forEach(element => {
        let prodName = element.product?.name;
        productNames.push(prodName)
    });
    return productNames.toString();
  }






}


