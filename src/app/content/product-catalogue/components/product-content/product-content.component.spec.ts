import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductContentComponent } from 'app/content/product-catalogue/components/product-content/product-content.component';
import { mockProducts } from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';

describe('ProductContentComponent', () => {
  let component: ProductContentComponent;
  let fixture: ComponentFixture<ProductContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductContentComponent);
    component = fixture.componentInstance;
    component.product = mockProducts[0];
    fixture.detectChanges();
  });

  it('should emit addToCart when onAddToCart is called', () => {
    spyOn(component.addToCart, 'emit');
    component.onAddToCart();
    expect(component.addToCart.emit).toHaveBeenCalled();
  });
});
