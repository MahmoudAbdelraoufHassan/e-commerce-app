import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../../shared/components/section-title/section-title.component";
import { ProductCardComponent } from "../../../../shared/components/product-card/product-card.component";

@Component({
  selector: 'app-flash-sales',
  standalone: true,
  imports: [SectionTitleComponent, ProductCardComponent],
  templateUrl: './flash-sales.component.html',
  styleUrl: './flash-sales.component.css'
})
export class FlashSalesComponent {

}
