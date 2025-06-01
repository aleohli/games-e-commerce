import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { distinctUntilChanged, exhaustMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import {
  Product,
  ProductStatus
} from 'app/content/product-catalogue/models/product';
import { Banner } from 'app/shared/banner/models/banner';
import { ProductCatalogueService } from 'app/content/product-catalogue/services/product-catalogue.service';
import { deepEqual } from 'fast-equals';

export interface ProductCatalogueState {
  products: Product[];
  loadingProducts: boolean;
  banner: Banner;
  loadingBanner: boolean;
}

@Injectable()
export class ProductCatalogueStore extends ComponentStore<ProductCatalogueState> {
  private productCatalogueService = inject(ProductCatalogueService);

  readonly products$ = this.select((state) => state.products).pipe(
    distinctUntilChanged((prev, curr) => deepEqual(prev, curr))
  );

  constructor() {
    super({
      products: [],
      loadingProducts: false,
      banner: undefined,
      loadingBanner: false
    });
  }

  readonly loadProducts = this.effect<void>((trigger$) =>
    trigger$.pipe(
      tap(() => this.patchState({ loadingProducts: true })),
      exhaustMap(() =>
        this.productCatalogueService.getProducts().pipe(
          tapResponse({
            next: (products) =>
              this.patchState({ products, loadingProducts: false }),
            error: () => {
              this.patchState({ loadingProducts: false });
            }
          })
        )
      )
    )
  );

  readonly loadBanner = this.effect<void>((trigger$) =>
    trigger$.pipe(
      tap(() => this.patchState({ loadingBanner: true })),
      exhaustMap(() =>
        this.productCatalogueService.getBanner().pipe(
          tapResponse({
            next: (banner) => this.patchState({ banner, loadingBanner: false }),
            error: () => {
              this.patchState({ loadingBanner: false });
            }
          })
        )
      )
    )
  );

  readonly updateProductsStatus = this.updater<number[]>(
    (state, cartProductIds: number[]) => ({
      ...state,
      products: state.products.map((product) => ({
        ...product,
        status: this.getUpdatedStatus(product, cartProductIds)
      }))
    })
  );

  private getUpdatedStatus(
    product: Product,
    cartProductIds: number[]
  ): ProductStatus {
    return product.status === ProductStatus.OWNED
      ? ProductStatus.OWNED
      : cartProductIds.includes(product.id)
        ? ProductStatus.IN_CART
        : ProductStatus.NOT_OWNED;
  }
}
