import { TestBed } from '@angular/core/testing';
import { ProductCatalogueFacadeService } from './product-catalogue-facade.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideProductCatalogueStore } from 'app/content/product-catalogue/mocks/mock-services.spec';
import { ProductCatalogueStore } from 'app/content/product-catalogue/store/product-catalogue.store';
import { selectCartProductIds } from 'app/core/store/cart/cart.reducer';
import { mockProducts } from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';
import { addProduct } from 'app/core/store/cart/cart.actions';

describe('ProductCatalogueFacadeService', () => {
  let facade: ProductCatalogueFacadeService;
  let store: MockStore;
  let productCatalogueStore: ProductCatalogueStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductCatalogueFacadeService,
        ...provideMockStore(),
        provideProductCatalogueStore()
      ]
    });
    store = TestBed.inject(MockStore);
    store.overrideSelector(selectCartProductIds, [1, 2, 3]);
    store.dispatch = jasmine.createSpy();
    productCatalogueStore = TestBed.inject(ProductCatalogueStore);
    facade = TestBed.inject(ProductCatalogueFacadeService);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should call updateProductsStatus on the product ids change', () => {
    expect(productCatalogueStore.updateProductsStatus).toHaveBeenCalledWith([
      1, 2, 3
    ]);
  });

  it('should call loadProducts on the store', () => {
    facade.loadProducts();
    expect(productCatalogueStore.loadProducts).toHaveBeenCalled();
  });

  it('should call loadBanner on the store', () => {
    facade.loadBanner();
    expect(productCatalogueStore.loadBanner).toHaveBeenCalled();
  });

  it('should dispatch add to cart action', () => {
    const { id, name, price, imageSrc } = mockProducts[0];
    facade.addToCart(mockProducts[0]);
    addProduct({ product: { id, name, price, imageSrc } });
    expect(store.dispatch).toHaveBeenCalledWith(
      addProduct({ product: { id, name, price, imageSrc } })
    );
  });
});
