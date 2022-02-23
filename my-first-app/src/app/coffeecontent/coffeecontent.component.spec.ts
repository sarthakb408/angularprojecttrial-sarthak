import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeecontentComponent } from './coffeecontent.component';

describe('CoffeecontentComponent', () => {
  let component: CoffeecontentComponent;
  let fixture: ComponentFixture<CoffeecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
