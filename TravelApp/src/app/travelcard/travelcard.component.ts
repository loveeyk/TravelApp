import { Component, Input, OnInit } from '@angular/core';
import {travelplace} from '../travel'
import { TravelComponent } from '../travel/travel.component';
import {CartserviceService} from '../cartservice.service';

@Component({
  selector: 'app-travelcard',
  templateUrl: './travelcard.component.html',
  styleUrls: ['./travelcard.component.css']
})
export class TravelcardComponent implements OnInit {

   @Input('travelobject') travelobject:any = {}
   @Input('id') id:number = 0;
  

  constructor(private cartService: CartserviceService) {

  }
  buttonClickedHandler(){
    this.cartService.addtoCart(this.travelobject)
  }

  ngOnInit(): void {
    
  }

}
