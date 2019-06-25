export class Product {
    pro_id: number;
    pro_name: string;
    pro_img: string;
    pro_price: number;
    pro_details: string;
    pro_quantity: number;
    constructor(Id,Name,Img,Price,Details,Quantity){
        this.pro_id = Id;
        this.pro_name = Name;
        this.pro_img = Img;
        this.pro_price = Price;
        this.pro_details = Details;
        this.pro_quantity = Quantity;
    }
}
