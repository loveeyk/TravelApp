import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelcardComponent } from './travelcard.component';

describe('TravelcardComponent', () => {
  let component: TravelcardComponent;
  let fixture: ComponentFixture<TravelcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
