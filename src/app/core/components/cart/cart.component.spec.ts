import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from 'app/core/components/cart/cart.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectCartState } from 'app/core/store/cart/cart.reducer';
import { CartDropdownComponent } from 'app/core/components/cart-dropdown/cart-dropdown.component';
import { CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { clearCart, removeProduct } from 'app/core/store/cart/cart.actions';
import { mockCartState } from 'app/core/mocks/mock-cart-state.spec';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore;
  let overlay: jasmine.SpyObj<Overlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [
        { provide: Overlay, useValue: mockOverlay() },
        { provide: ViewContainerRef, useValue: {} },
        provideNoopAnimations(),
        ...provideMockStore()
      ]
    })
      .overrideComponent(CartComponent, {
        add: { schemas: [CUSTOM_ELEMENTS_SCHEMA] },
        remove: { imports: [CartDropdownComponent] }
      })
      .compileComponents();

    store = TestBed.inject(MockStore);
    store.dispatch = jasmine.createSpy();
    overlay = TestBed.inject(Overlay) as jasmine.SpyObj<Overlay>;
    store.overrideSelector(selectCartState, mockCartState());
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dropdown if cart is empty after state update', () => {
    spyOn(component, 'closeDropdown');
    store.overrideSelector(selectCartState, {
      ...mockCartState(),
      amount: 0
    });
    store.refreshState();
    fixture.detectChanges();
    expect(component.closeDropdown).toHaveBeenCalled();
  });

  it('should not close dropdown if cart is empty after state update', () => {
    spyOn(component, 'closeDropdown');
    expect(component.closeDropdown).not.toHaveBeenCalled();
  });

  it('should not open dropdown if cart is empty', () => {
    component.cartState = { ...mockCartState(), amount: 0 };
    component.openDropdown(document.createElement('div'));
    expect(overlay.create).not.toHaveBeenCalled();
  });

  it('should open dropdown if cart is not empty', () => {
    const expected = {
      positionStrategy: { originX: 'end' },
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    } as unknown as OverlayConfig;

    component.openDropdown(document.createElement('div'));

    expect(overlay.create).toHaveBeenCalledWith(expected);
  });

  it('should set overlayRef to null on closeDropdown', () => {
    const fakeOverlayRef = mockOverlayRef();
    component['overlayRef'] = fakeOverlayRef;

    component.closeDropdown();

    expect(fakeOverlayRef.dispose).toHaveBeenCalled();
    expect(component['overlayRef']).toBeNull();
  });

  it('should dispatch clearCart on onClearCart', () => {
    component.onClearCart();
    expect(store.dispatch).toHaveBeenCalledWith(clearCart());
  });

  it('should dispatch removeProduct on onRemoveProduct', () => {
    component.onRemoveProduct(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      removeProduct({ productId: 1 })
    );
  });

  function mockOverlay(): jasmine.SpyObj<Overlay> {
    const spyObj = jasmine.createSpyObj('Overlay', ['create', 'position']);
    spyObj.position.and.returnValue({
      flexibleConnectedTo: () => ({
        withPositions: () => ({ originX: 'end' })
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
    spyObj.create.and.returnValue(mockOverlayRef());

    return spyObj;
  }

  function mockOverlayRef(): jasmine.SpyObj<OverlayRef> {
    const spyObj = jasmine.createSpyObj('OverlayRef', [
      'dispose',
      'backdropClick',
      'attach'
    ]);
    spyObj.backdropClick.and.returnValue(of());

    return spyObj;
  }
});
