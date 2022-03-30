import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/modules/shopping/Models/order';
import { OrderItem } from 'src/app/modules/shopping/Models/order-item';
import { OrderUI } from 'src/app/modules/shopping/Models/OrderUI';
import { OrdersService } from 'src/app/modules/shopping/services/orders.service';


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
  UserId : string = "6234b1d08b1c0e34977db2ae";


  constructor(private ordersService: OrdersService,) { }

  ngOnInit(): void {
    this.ordersService.getOrdersByUserID(this.UserId).subscribe({
      next: (res) => {
        console.log(res);
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
        console.log(err)
        alert(err)
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


