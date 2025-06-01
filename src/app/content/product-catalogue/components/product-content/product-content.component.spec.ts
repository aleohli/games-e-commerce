import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductContentComponent } from 'app/content/product-catalogue/components/product-content/product-content.component';
import {
  ComponentRef,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';
import { mockProducts } from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';

describe('ProductContentComponent', () => {
  let component: ProductContentComponent;
  let fixture: ComponentFixture<ProductContentComponent>;
  let componentRef: ComponentRef<ProductContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductContentComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductContentComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('product', mockProducts[0]);
    fixture.detectChanges();
  });

  it('should emit addToCart when onAddToCart is called', () => {
    spyOn(component.addToCart, 'emit');
    component.onAddToCart();
    expect(component.addToCart.emit).toHaveBeenCalled();
  });
});
