import { OrderItem } from './order-item';

export class Order {
    _id?: string;
    orderItems?: OrderItem[];
    shippingAddress1?: string;
    shippingAddress2?: string;
    city?: string;
    zip?: string;
    country?: string;
    phone?: string;
    status?: string;
    totalPrice?: number;
    userId?: any;
    dateOrdered?: Date;

}






