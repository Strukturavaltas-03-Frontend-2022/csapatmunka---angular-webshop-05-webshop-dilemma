import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTurnComponent } from './product-turn.component';

describe('ProductTurnComponent', () => {
  let component: ProductTurnComponent;
  let fixture: ComponentFixture<ProductTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTurnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
