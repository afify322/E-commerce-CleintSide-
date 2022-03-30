import { Injectable } from '@angular/core';

import { BehaviorSubject, from, Observable } from 'rxjs';

import { Order } from '../Models/order';
import { HttpClient } from '@angular/common/http';
import { OrderUI } from '../Models/OrderUI';



@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    baseURL: string = 'https://hedoom.herokuapp.com';


    // private ordersSubject = new BehaviorSubject<Order[]>([
    //     { _id: '6234b0f2399cfe48a5fb95ea', shippingAddress1: 'ismailia' },
    //     { _id: '6234b0f9399cfe48a5fb95ec', shippingAddress1: 'ismailia' },

    // ]);

    // ordersObservable = this.ordersSubject.asObservable();


    constructor(private httpClient: HttpClient) { }


    createOrder(order: Order) {
        return this.httpClient.post<Order>(this.baseURL + '/order', order);
    }


    getOrdersByUserID(UserId: string) {
        return this.httpClient.get<any>(this.baseURL + '/order/userOrders/' + UserId);
    }
}