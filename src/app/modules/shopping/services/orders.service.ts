import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Order } from '../Models/order';


@Injectable({
    providedIn: 'root'
})
export class OrdersService {
   

    private ordersSubject = new BehaviorSubject<Order[]>([
        { id: '1',shippingAddress1: 'ismailia' },
        { id: '2',shippingAddress1: 'ismailia'},

    ]);

    ordersObservable = this.ordersSubject.asObservable();


    constructor() { }


    createOrder(order: Order){

        this.ordersSubject.getValue().push(order);
       

        return this.ordersObservable;
    }


}