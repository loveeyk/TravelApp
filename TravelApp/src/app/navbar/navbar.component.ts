import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //boolean for navbar toggle state
  isNavbarOpen: boolean = false; 

  //links from the menu + routerpath
  links = [ {text: "Home", path: "/"}, {text: "Travel", path: "/travel"}, {text: "Blog", path:"/blog"}, {text: "About Us", path: "/about"}, {text: "Contact Us", path:"/contact"}]
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * If Burger Icon is clicked toggle state isNavbarOpen
   */
  burgerButtonClickedHandler():void{
    this.isNavbarOpen = !this.isNavbarOpen
    console.log("bin in clickhandler")
  }
  
  //Styling Object for toggling Navbar
  toggleNavbar(): Object {
    return this.isNavbarOpen ? {'margin-top': '-300px', 'z-index': '-1'} : {'margin-top': '0px', 'z-index': '0'} ;
}
  
  


}
