import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCardsComponent } from './sport-cards.component';

describe('SportCardsComponent', () => {
  let component: SportCardsComponent;
  let fixture: ComponentFixture<SportCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
