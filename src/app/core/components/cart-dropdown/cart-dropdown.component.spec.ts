import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartDropdownComponent } from 'app/core/components/cart-dropdown/cart-dropdown.component';
import { mockCartState } from 'app/core/mocks/mock-cart-state.spec';
import {
  ComponentRef,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';

describe('CartDropdownComponent', () => {
  let component: CartDropdownComponent;
  let fixture: ComponentFixture<CartDropdownComponent>;
  let componentRef: ComponentRef<CartDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDropdownComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartDropdownComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('cartState', mockCartState());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clearCart when onClearCart is called', () => {
    spyOn(component.clearCart, 'emit');
    component.onClearCart();
    expect(component.clearCart.emit).toHaveBeenCalled();
  });

  it('should emit removeProduct when onRemoveProduct is called', () => {
    spyOn(component.removeProduct, 'emit');
    component.onRemoveProduct(1);
    expect(component.removeProduct.emit).toHaveBeenCalledWith(1);
  });
});
