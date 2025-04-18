import { Component, Input, OnInit } from '@angular/core';

// type offer_timer={
// days : string ,
// hours : string ,
// minutes : string,
// seconds : string
// }

@Component({
  selector: 'app-offers-timer',
  standalone: true,
  imports: [],
  templateUrl: './offers-timer.component.html',
  styleUrl: './offers-timer.component.css',
})
export class OffersTimerComponent implements OnInit {
  @Input() offer_timer!: string;
  ngOnInit(): void {
    this.discountTimer();
    setInterval(() => {
      this.discountTimer();
    }, 1000);
  }

  discountTimer() {
    const curDate = new Date().getTime();
    const futureDate = new Date('2025-04-22').getTime();
    const diffBtwMs = futureDate - curDate;
    // seconds;
    const totalSeconds = Math.floor(diffBtwMs / 1000);
    const seconds = totalSeconds % 60;
    // minutes
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    // hours
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    // days
    const days = Math.floor(totalHours / 24);
    return {
      days: days.toString().padStart(2 , "00"),
      hours: hours.toString().padStart(2 , "00"),
      minutes: minutes.toString().padStart(2 , "00"),
      seconds: seconds.toString().padStart(2 , "00"),
    };
  }
  
}
