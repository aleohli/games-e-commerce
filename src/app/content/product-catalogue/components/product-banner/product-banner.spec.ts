import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBanner } from './product-banner';

describe('ProductBanner', () => {
  let component: ProductBanner;
  let fixture: ComponentFixture<ProductBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBanner]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
