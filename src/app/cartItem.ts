import { Product } from './product';

export class CartItem {
    id : number;
    product : Product;
    quantity : number;
    price: number;
    name:string;

    constructor(Id,Product,Quantity){
        this.id = Id;
        this.product = Product;
        this.quantity = Quantity;
        this.price = this.product.pro_price;
        this.name =this.product.pro_name;
        
    }
}