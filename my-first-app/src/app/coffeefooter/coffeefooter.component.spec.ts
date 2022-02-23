import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeefooterComponent } from './coffeefooter.component';

describe('CoffeefooterComponent', () => {
  let component: CoffeefooterComponent;
  let fixture: ComponentFixture<CoffeefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeefooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
