import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../../shared/components/section-title/section-title.component";
import { ProductCardComponent } from "../../../../shared/components/product-card/product-card.component";

@Component({
  selector: 'app-new-arrival',
  standalone: true,
  imports: [SectionTitleComponent, ProductCardComponent],
  templateUrl: './new-arrival.component.html',
  styleUrl: './new-arrival.component.css'
})
export class NewArrivalComponent {

}
