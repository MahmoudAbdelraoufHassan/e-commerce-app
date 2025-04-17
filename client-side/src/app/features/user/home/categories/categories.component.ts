import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../../shared/components/section-title/section-title.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

}
