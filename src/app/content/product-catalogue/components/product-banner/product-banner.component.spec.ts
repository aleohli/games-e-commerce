import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBannerComponent } from 'app/content/product-catalogue/components/product-banner/product-banner.component';

describe('ProductBanner', () => {
  let component: ProductBannerComponent;
  let fixture: ComponentFixture<ProductBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBannerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
