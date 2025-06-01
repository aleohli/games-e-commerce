import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductBannerComponent } from 'app/content/product-catalogue/components/product-banner/product-banner.component';
import { mockBanner } from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';

describe('ProductBanner', () => {
  let component: ProductBannerComponent;
  let fixture: ComponentFixture<ProductBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBannerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBannerComponent);
    component = fixture.componentInstance;
    component.banner = mockBanner;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit btnClick when onBtnClick is called', () => {
    spyOn(component.btnClick, 'emit');
    component.onBtnClick();
    expect(component.btnClick.emit).toHaveBeenCalled();
  });
});
