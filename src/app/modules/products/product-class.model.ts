export class Product{
    _id?:string;
    name: string;
    description: string;
    image: string;
    brand: string;
    price: number;
    category: string;
    countInStock: number;
    rating: number;
    dateCreated:number= Date.now();
    isFeatured: boolean;

    constructor(_id:string,name: string,
        description: string,
        image: string,
        brand: string,
        price: number,
        category: string,
        countInStock: number,
        rating: number,
        isFeatured: boolean) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.brand = brand;
        this.price = price;
        this.category = category;
        this.countInStock = countInStock;
        this.isFeatured = isFeatured;
        this.rating = rating;
        this._id=_id;

    }
}
