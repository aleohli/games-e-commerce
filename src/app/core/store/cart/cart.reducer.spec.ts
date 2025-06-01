import { cartReducer, initialState } from './cart.reducer';
import * as CartActions from './cart.actions';
import { mockCart, mockCartState } from 'app/core/mocks/mock-cart-state.spec';

describe('cartReducer', () => {
  it('should return the initial state', () => {
    const state = cartReducer(undefined, { type: 'unknow' } as any);
    expect(state).toEqual(initialState);
  });

  it('should add a product to the cart', () => {
    const state = cartReducer(
      mockCartState({ cart: [mockCart[0], mockCart[1]] }),
      CartActions.addProduct({ product: mockCart[2] })
    );
    expect(state.cart).toEqual(mockCart);
    expect(state.amount).toBe(3);
    expect(state.totalPrice).toBe(59.97);
  });

  it('should not add the same product twice', () => {
    const state = cartReducer(
      mockCartState(),
      CartActions.addProduct({ product: mockCart[0] })
    );
    expect(state.cart).toEqual(mockCart);
    expect(state.amount).toBe(3);
    expect(state.totalPrice).toBe(59.97);
  });

  it('should remove a product from the cart', () => {
    const state = cartReducer(
      mockCartState(),
      CartActions.removeProduct({ productId: 1 })
    );
    expect(state.cart).toEqual([mockCart[1], mockCart[2]]);
    expect(state.amount).toBe(2);
    expect(state.totalPrice).toBe(39.98);
  });

  it('should clear the cart', () => {
    const state = cartReducer(mockCartState(), CartActions.clearCart());
    expect(state.cart).toEqual([]);
    expect(state.amount).toBe(0);
    expect(state.totalPrice).toBe(0);
  });
});
