import { TestBed } from '@angular/core/testing';
import { ProductCatalogueFacadeService } from './product-catalogue-facade.service';
import { provideProductCatalogueStore } from 'app/content/product-catalogue/mocks/mock-services.spec';

describe('ProductCatalogueFacadeService', () => {
  let facade: ProductCatalogueFacadeService;
  let productCatalogueStore: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCatalogueFacadeService, provideProductCatalogueStore()]
    });
    // productCatalogueStore = TestBed.inject(ProductCatalogueStore);
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

  // it('should dispatch add to cart action', () => {
  //   const { id, name, price, imageSrc } = mockProducts[0];
  //   facade.addToCart(mockProducts[0]);
  //   addProduct({ product: { id, name, price, imageSrc } });
  //   expect(store.dispatch).toHaveBeenCalledWith(
  //     addProduct({ product: { id, name, price, imageSrc } })
  //   );
  // });
});
