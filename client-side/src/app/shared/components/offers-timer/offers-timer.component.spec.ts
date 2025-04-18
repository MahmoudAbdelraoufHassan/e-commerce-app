import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersTimerComponent } from './offers-timer.component';

describe('OffersTimerComponent', () => {
  let component: OffersTimerComponent;
  let fixture: ComponentFixture<OffersTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
