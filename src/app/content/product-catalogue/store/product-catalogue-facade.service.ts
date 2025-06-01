import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductCatalogueStore } from 'app/content/product-catalogue/store/product-catalogue.store';
import { addProduct } from 'app/core/store/cart/cart.actions';
import { Product } from 'app/content/product-catalogue/models/product';
import { Product as CartProduct } from 'app/core/models/product';
import { selectCartProductIds } from 'app/core/store/cart/cart.reducer';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class ProductCatalogueFacadeService {
  private store = inject(Store);
  private productCatalogueStore = inject(ProductCatalogueStore);

  readonly state$ = this.productCatalogueStore.state$;

  constructor() {
    this.subscribeToCartChange();
  }

  private subscribeToCartChange() {
    this.store
      .select(selectCartProductIds)
      .pipe(takeUntilDestroyed())
      .subscribe((productIds) => {
        this.productCatalogueStore.updateProductsStatus(productIds);
      });
  }

  loadProducts(): void {
    this.productCatalogueStore.loadProducts();
  }

  loadBanner(): void {
    this.productCatalogueStore.loadBanner();
  }

  addToCart(product: Product): void {
    const productToAdd: CartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageSrc: product.imageSrc
    };
    this.store.dispatch(addProduct({ product: productToAdd }));
  }
}
