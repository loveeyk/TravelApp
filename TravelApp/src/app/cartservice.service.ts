import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  items:Array<any> = []
  cartSize:number = 0

  constructor() {
  
   }

  addtoCart(product:any){
    if(product){
      this.items.push(product)
      this.cartSize++;
    }
  }
  deleteItem(item:any){
    let filtered = this.items.filter(it => it.name !== item.name)
    this.items = filtered
  }

  getTotalPrice(){
    let total = 0;
    let reduction = 0;
    let red = "0%"

    this.items.forEach((item:any) => total +=  parseInt(item.price))
    if(total > 200){
      reduction = 0.9;
      red = "10%"
      if(total > 500){
        reduction = 0.8;
        red = "20%"
      }
    }

    return  {price: total * reduction, reduced: total > 200, red: red };
  }

  getItemsLength(){
    return this.items.length;
  }
  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }
}
