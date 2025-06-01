import { inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import {
  Product,
  ProductStatus
} from 'app/content/product-catalogue/models/product';
import { Banner } from 'app/shared/banner/models/banner';
import { ProductCatalogueService } from 'app/content/product-catalogue/services/product-catalogue.service';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

export interface ProductCatalogueState {
  products: Product[];
  loadingProducts: boolean;
  banner: Banner;
  loadingBanner: boolean;
}

const initialState: ProductCatalogueState = {
  products: [],
  loadingProducts: false,
  banner: undefined,
  loadingBanner: false
};

export const ProductCatalogueStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    updateProductsStatus(cartProductIds: number[]) {
      patchState(store, (state) => ({
        ...state,
        products: state.products.map((product) => ({
          ...product,
          status:
            product.status === ProductStatus.OWNED
              ? ProductStatus.OWNED
              : cartProductIds.includes(product.id)
                ? ProductStatus.IN_CART
                : ProductStatus.NOT_OWNED
        }))
      }));
    }
  })),
  withMethods((store, service = inject(ProductCatalogueService)) => ({
    loadProducts: rxMethod<void>(
      pipe(
        tap(() => {
          patchState(store, { loadingProducts: true });
        }),
        switchMap(() => service.getProducts()),
        tap({
          next(products) {
            patchState(store, { products, loadingProducts: false });
          },
          error() {
            patchState(store, { loadingProducts: false });
          }
        })
      )
    ),
    loadBanner: rxMethod<void>(
      pipe(
        tap(() => {
          patchState(store, { loadingBanner: true });
        }),
        switchMap(() => service.getBanner()),
        tap({
          next(banner) {
            patchState(store, { banner, loadingBanner: false });
          },
          error() {
            patchState(store, { loadingBanner: false });
          }
        })
      )
    )
  })),
  withHooks({
    onInit(store) {
      store.loadProducts();
      store.loadBanner();
    }
  })
);
