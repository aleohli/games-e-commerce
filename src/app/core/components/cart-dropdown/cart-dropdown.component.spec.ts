import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartDropdownComponent } from 'app/core/components/cart-dropdown/cart-dropdown.component';
import { mockCartState } from 'app/core/mocks/mock-cart-state.spec';

describe('CartDropdownComponent', () => {
  let component: CartDropdownComponent;
  let fixture: ComponentFixture<CartDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDropdownComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CartDropdownComponent);
    component = fixture.componentInstance;
    component.cartState = mockCartState();
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
