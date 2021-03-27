import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //boolean for navbar toggle state
  isNavbarOpen: boolean; 
  windowWidth: any;
  //links from the menu + routerpath
  links = [ {text: "Home", path: "/"}, {text: "Travel", path: "/travel"}, {text: "Blog", path:"/blog"}, {text: "About Us", path: "/about"}, {text: "Contact Us", path:"/contact"}]
  constructor() { 
    this.isNavbarOpen = false;
    this.windowWidth = window.innerWidth;
  }


  ngOnInit(): void {
    this.isNavbarOpen = false;
    this.windowWidth = window.innerWidth;
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
        return !this.isNavbarOpen ? {'margin-top': '-300px', 'z-index': '-1'} : {'margin-top': '0px', 'z-index': '1'} ;
      }else{
        return {'margin-top': '0px', 'z-index': '1', 'transition': 'none'}
      }
      
  }
    
    
}
  
  



