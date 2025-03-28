import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isActive : boolean;
constructor(){
  this.isActive = false;
}

ActiveMobileMenu(){
  if(!this.isActive){
    this.isActive = true;
  }
  else {
    this.isActive = false
  }
}
}
