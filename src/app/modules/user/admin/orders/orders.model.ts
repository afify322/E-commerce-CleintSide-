export interface orders {
    _id?:string;
    orderItems:orderItems[];
    shippingAddress1:string;
    shippingAddress2:string;
    city: string;
    zip: string;
    country: string;
    phone: string;
    status: status;
    totalPrice: number;
    userId:user;
    dateOrdered: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface user {
    favourite: any[];
    _id: string;
    name: string;
    email: string;
    password: string;
    street: string;
    apartment: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
    isAdmin: boolean;
    __v?: number;
    image?: string;
}
export interface orderItems{
    _id: string;
    product: Product;
    quantity: number;
    __v?: number;
}

export interface Category {
    _id: string;
    name: string;
    __v: number;
    updatedAt: Date;
    image: string;
}
export interface Product {
    isFeatured: boolean;
    _id?: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    countInStock: number;
    rating: number;
    dateCreated: Date;
    __v?: number;
    image?: string;
}

export enum status{
    canceled="canceled",completed="completed"
}