import { Component, DoCheck, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,DoCheck {

  items:Array<any> = [];

  constructor(private CartService:CartserviceService) { 
    this.items = CartService.getItems()
  }

  deleteButtonHandler(item:any){
    this.CartService.deleteItem(item)
  }

  getTotalPrice():any {
    return this.CartService.getTotalPrice()
  }
  ngOnInit(): void {
    console.log(this.items)
  }
  ngDoCheck(){
    this.items = this.CartService.getItems()
  }

}
