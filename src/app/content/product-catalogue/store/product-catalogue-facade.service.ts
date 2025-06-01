import { effect, inject, Injectable, Signal } from '@angular/core';
import { ProductCatalogueStore } from 'app/content/product-catalogue/store/product-catalogue.store';
import { Product } from 'app/content/product-catalogue/models/product';
import { Product as CartProduct } from 'app/core/models/product';
import { CartStore } from 'app/core/store/cart.store';
import { deepEqual } from 'fast-equals';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs';

@Injectable()
export class ProductCatalogueFacadeService {
  private cartStore = inject(CartStore);
  private productCatalogueStore = inject(ProductCatalogueStore);
  private readonly products$ = toObservable(
    this.productCatalogueStore.products
  ).pipe(distinctUntilChanged(deepEqual));

  // TODO find better way to handle signals changes
  readonly products: Signal<Product[]> = toSignal(this.products$);
  readonly loadingProducts = this.productCatalogueStore.loadingProducts;
  readonly banner = this.productCatalogueStore.banner;
  readonly loadingBanner = this.productCatalogueStore.loadingBanner;

  constructor() {
    effect(() => {
      if (this.products().length) {
        const productIds = this.cartStore.productIds();
        this.productCatalogueStore.updateProductsStatus(productIds);
      }
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
    this.cartStore.addProduct(productToAdd);
  }
}
