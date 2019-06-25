import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CartItem} from '../cartItem';
import {Product} from '../product';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductlistComponent  implements OnInit {
  ngOnInit(): void {
    this.getTotalPrice();
  }

  constructor(private DomSanitizer: DomSanitizer ){
    
  }
  dataSource : CartItem[] = JSON.parse( localStorage.getItem("Item"));
  columnsToDisplay = ['name', 'price', 'quantity'];
  TotalPrice =0;

getTotalPrice(){
var totalItemPrice =0;
for (let index =0; index < this.dataSource.length; index++) {
   totalItemPrice = this.dataSource[index].product.pro_price *  this.dataSource[index].quantity; 
  this.TotalPrice  += totalItemPrice;
  //this.TotalItemPrice = totalItemPrice;
}

}
  expandedElement: CartItem | null;
}



