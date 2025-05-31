import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart/cart.reducer';
import { EnvironmentProviders } from '@angular/core';

export function provideCoreState(): EnvironmentProviders[] {
  return [provideStore({ cart: cartReducer })];
}
