import { Component } from '@angular/core';
import { NavbarComponent } from '../../../core/layout/navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { FlashSalesComponent } from './flash-sales/flash-sales.component';
import { OffersComponent } from './offers/offers.component';
import { ServicesComponent } from "./services/services.component";
import { CompaniesComponent } from './companies/companies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    LandingComponent,
    CategoriesComponent,
    NewArrivalComponent,
    FlashSalesComponent,
    OffersComponent,
    ServicesComponent,
    CompaniesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
