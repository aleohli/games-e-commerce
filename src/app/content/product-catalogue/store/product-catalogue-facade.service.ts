import { effect, inject, Injectable } from '@angular/core';
import { ProductCatalogueStore } from 'app/content/product-catalogue/store/product-catalogue.store';
import { Product } from 'app/content/product-catalogue/models/product';
import { Product as CartProduct } from 'app/core/models/product';
import { CartStore } from 'app/core/store/cart.store';

@Injectable()
export class ProductCatalogueFacadeService {
  private cartStore = inject(CartStore);
  private productCatalogueStore = inject(ProductCatalogueStore);

  readonly products = this.productCatalogueStore.products;
  readonly loadingProducts = this.productCatalogueStore.loadingProducts;
  readonly banner = this.productCatalogueStore.banner;
  readonly loadingBanner = this.productCatalogueStore.loadingBanner;

  constructor() {
    effect(() => {
      const productIds = this.cartStore.productIds();
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
    this.cartStore.addProduct(productToAdd);
  }
}
