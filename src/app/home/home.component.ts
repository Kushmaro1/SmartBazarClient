import { Component, OnInit, Input } from '@angular/core';
import { Product} from "../product"
import { BazarService} from "../bazar.service"
import { CartItem } from '../cartItem';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
 
export class HomeComponent implements OnInit {
  productList : Product[] = [];
  cartList : CartItem[] = [];
  sercTxt : string;
  sid = 1;
  sq = 1;

  constructor(private service:BazarService) { }

  GetAllProduct(){
    this.service.GetAllProducts().subscribe((data:any[])=> {
data.forEach(obj=> {
  let product = new Product(obj.pro_id,obj.pro_name,obj.pro_img,obj.pro_price,
    obj.pro_details,obj.pro_quantity);
    this.productList.push(product);
}) 
   });
  }
  AddToCart(pid){
    if(this.cartList.length>0){
      for (let index = 0; index < this.cartList.length; index++) {
        if(this.cartList[index].product.pro_id === pid){
          this.cartList[index].quantity++;
          console.log(this.cartList);
           localStorage.setItem("Item", JSON.stringify(this.cartList));
          return
        }
        
      }
    }
    
    this.productList.forEach(element =>{
      if(element.pro_id === pid){
        this.sid++;
        let cartItem = new CartItem(this.sid, element, this.sq);
        this.cartList.push(cartItem);
         localStorage.setItem("Item", JSON.stringify(this.cartList));
         console.log(this.cartList);
      }
    })
  
 
 
  }
  GetProductByName(str){
    this.productList.filter((x:any)=>
    x.Product.Name.toLowerCase().includes(str.toLowerCase()));
  }
  ngOnInit() {
    this.GetAllProduct();
  }

}


