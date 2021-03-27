import { Component, OnInit } from '@angular/core';
import {travelplace} from '../travel'

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit{


  travels = travelplace;


  ngOnInit(): void {
  }

  


}
