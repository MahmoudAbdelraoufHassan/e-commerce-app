import { Component } from '@angular/core';
import { OffersTimerComponent } from "../../../../shared/components/offers-timer/offers-timer.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [OffersTimerComponent , CarouselModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
 customOptions: OwlOptions = {
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: true,
    // nav : true ,
    // Apply the zoomIn effect
    smartSpeed: 600,
    // navText: [
    //   "<i class='bx bx-chevron-left'></i>",
    //   "<i class='bx bx-chevron-right' ></i>",
    // ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };
}
