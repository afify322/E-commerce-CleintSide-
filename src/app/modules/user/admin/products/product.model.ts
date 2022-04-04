
    export interface Category {
        _id?: string;
        name: string;
        __v?: number;
        updatedAt?: Date;
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
        dateCreated?: Date;
        __v?: number;
        image?: string;
    }



