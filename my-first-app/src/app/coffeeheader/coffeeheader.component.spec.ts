import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeheaderComponent } from './coffeeheader.component';

describe('CoffeeheaderComponent', () => {
  let component: CoffeeheaderComponent;
  let fixture: ComponentFixture<CoffeeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
