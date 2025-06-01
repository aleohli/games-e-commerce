import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from '@ngrx/signals';
import { Product } from 'app/core/models/product';
import { computed } from '@angular/core';
import { withStorage } from '@larscom/ngrx-signals-storage';

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

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ cart }) => ({
    productIds: computed(() => cart().map(({ id }) => id)),
    isEmpty: computed(() => !cart().length)
  })),
  withMethods(() => ({
    _countTotalPrice(cart: Product[]) {
      return cart.reduce((sum, product) => sum + product.price, 0);
    }
  })),
  withMethods((store) => ({
    addProduct(product: Product) {
      patchState(store, (state) => {
        const isInCart = state.cart.some(({ id }) => id === product.id);
        const cart: Product[] = !isInCart
          ? [...state.cart, product]
          : [...state.cart];
        return {
          cart,
          amount: cart.length,
          totalPrice: store._countTotalPrice(cart)
        };
      });
    },
    removeProduct(productId: number) {
      patchState(store, (state) => {
        const cart = state.cart.filter(({ id }) => id !== productId);
        return {
          cart,
          amount: cart.length,
          totalPrice: store._countTotalPrice(cart)
        };
      });
    },
    clearCart() {
      patchState(store, () => ({ cart: [], amount: 0, totalPrice: 0 }));
    }
  })),
  withStorage('cart', localStorage)
);
