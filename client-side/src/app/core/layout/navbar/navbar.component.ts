import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isActive: boolean;
  userDropdown: boolean;
  cartDropdown : boolean
  constructor() {
    this.isActive = false;
    this.userDropdown = false;
    this.cartDropdown = false;
  }

  ActiveMobileMenu() {
    if (!this.isActive) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
  activeUserDropdown() {
    if (!this.userDropdown) {
      this.userDropdown = true;
    } else {
      this.userDropdown = false;
    }
  }
  activeCartDropdown() {
    if (!this.cartDropdown) {
      this.cartDropdown = true;
    } else {
      this.cartDropdown = false;
    }
  }
}
