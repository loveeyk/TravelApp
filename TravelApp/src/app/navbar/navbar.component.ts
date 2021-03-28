import { Component, OnInit, HostListener, DoCheck } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  //boolean for navbar toggle state
  isNavbarOpen: boolean = false; 
  windowWidth: any = window.innerWidth;
  cartSize: number = 0;

  //links from the menu + routerpath
  links = [{text: "Home", path: "/"}, {text: "Travel", path: "/travel"}, {text: "Blog", path:"/blog"}, {text: "About Us", path: "/about"}, {text: "Contact Us", path:"/contact"}]
  constructor(private cartService:CartserviceService) { 
    this.isNavbarOpen = false;
    this.windowWidth = window.innerWidth;
    this.cartSize = this.cartService.cartSize
    
  }


  ngOnInit(): void {
    this.isNavbarOpen = false;
    this.windowWidth = window.innerWidth;
  }
  ngDoCheck(){
    this.cartSize = this.cartService.cartSize
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
  this.windowWidth = window.innerWidth;
}

  /**
   * If Burger Icon is clicked toggle state isNavbarOpen
   */
  burgerButtonClickedHandler():void{
    this.isNavbarOpen = !this.isNavbarOpen
    console.log("bin in clickhandler")
  }

  /** If Link is clicled Navbar should close */
  linkClickedHandler(){
    this.isNavbarOpen = false
  }

  //Styling Object for toggling Navbar
  toggleNavbar(): Object {
      if(this.windowWidth <=700){
        return !this.isNavbarOpen ? {'margin-top': '-500px', 'z-index': '-1'} : {'margin-top': '0px', 'z-index': '1'} ;
      }else{
        return {'margin-top': '0px', 'z-index': '1', 'transition': 'none'}
      }
      
  }
    
    
}
  
  



