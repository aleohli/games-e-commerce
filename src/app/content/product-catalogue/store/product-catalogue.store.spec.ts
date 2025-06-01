import { ProductCatalogueStore } from './product-catalogue.store';
import { ProductCatalogueService } from 'app/content/product-catalogue/services/product-catalogue.service';
import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { provideProductCatalogueService } from 'app/content/product-catalogue/mocks/mock-services.spec';
import {
  mockBanner,
  mockProducts
} from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';
import { ProductStatus } from 'app/content/product-catalogue/models/product';

describe('ProductCatalogueStore', () => {
  let store: ProductCatalogueStore;
  let service: jasmine.SpyObj<ProductCatalogueService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCatalogueStore, provideProductCatalogueService()]
    });

    store = TestBed.inject(ProductCatalogueStore);
    service = TestBed.inject(
      ProductCatalogueService
    ) as jasmine.SpyObj<ProductCatalogueService>;
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should set loadingProducts to true before fetching products', () => {
    const patchStateSpy = spyOn(store, 'patchState').and.callThrough();
    store.loadProducts();
    expect(patchStateSpy).toHaveBeenCalledWith({ loadingProducts: true });
  });

  it('should load products and update state', (done) => {
    store.loadProducts();
    store.state$.subscribe((state) => {
      expect(state.products).toEqual(mockProducts);
      expect(state.loadingProducts).toEqual(false);
      done();
    });
  });

  it('should set loadingProducts to false on error', (done) => {
    service.getProducts.and.returnValue(throwError(() => new Error('error')));
    store.loadProducts();
    store.state$.subscribe((state) => {
      expect(state.loadingProducts).toEqual(false);
      done();
    });
  });

  it('should set loadingBanner to true before fetching products', () => {
    const patchStateSpy = spyOn(store, 'patchState').and.callThrough();
    store.loadBanner();
    expect(patchStateSpy).toHaveBeenCalledWith({ loadingBanner: true });
  });

  it('should load banner and update state', (done) => {
    store.loadBanner();
    store.state$.subscribe((state) => {
      expect(state.banner).toEqual(mockBanner);
      expect(state.loadingBanner).toEqual(false);

      done();
    });
  });

  it('should set loadingBanner to false on error', (done) => {
    service.getBanner.and.returnValue(throwError(() => new Error('fail')));
    store.loadBanner();
    store.state$.subscribe((state) => {
      expect(state.loadingBanner).toEqual(false);
      done();
    });
  });

  it('should update products status based on cartProductIds', (done) => {
    store.loadProducts();
    store.updateProductsStatus([1]);
    store.state$.subscribe((state) => {
      const statues = state.products.map(({ status }) => status);
      expect(statues).toEqual([
        ProductStatus.IN_CART,
        ProductStatus.OWNED,
        ProductStatus.NOT_OWNED
      ]);
      done();
    });
  });
});
