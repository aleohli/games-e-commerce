import {
  ActionReducer,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import * as CartActions from './cart.actions';
import { Product } from 'app/core/models/product';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface CartState {
  cart: Product[];
  totalPrice: number;
  amount: number;
}

export const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  amount: 0
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addProduct, (state, { product }) => {
    const isInCart = state.cart.some(({ id }) => id === product.id);
    const cart = !isInCart ? [...state.cart, product] : [...state.cart];
    return {
      cart,
      amount: cart.length,
      totalPrice: countTotalPrice(cart)
    };
  }),
  on(CartActions.removeProduct, (state, { productId }) => {
    const cart = state.cart.filter(({ id }) => id !== productId);
    return {
      cart,
      amount: cart.length,
      totalPrice: countTotalPrice(cart)
    };
  }),
  on(CartActions.clearCart, () => ({
    cart: [],
    amount: 0,
    totalPrice: 0
  }))
);

function countTotalPrice(cart: Product[]): number {
  return cart.reduce((sum, product) => sum + product.price, 0);
}

export const selectCartState = createFeatureSelector<CartState>('cart');
export const selectCartProductIds = createSelector(selectCartState, (state) =>
  state.cart.map(({ id }) => id)
);

export function localStorageSyncReducer(
  reducer: ActionReducer<{ cart: CartState }>
): ActionReducer<{ cart: CartState }> {
  return localStorageSync({
    keys: ['cart', 'amount', 'totalPrice'],
    rehydrate: true
  })(reducer);
}
