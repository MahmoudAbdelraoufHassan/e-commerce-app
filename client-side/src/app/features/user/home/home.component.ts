import { Component } from '@angular/core';
import { NavbarComponent } from "../../../core/layout/navbar/navbar.component";
import { LandingComponent } from "./landing/landing.component";
import { CategoriesComponent } from "./categories/categories.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, LandingComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
