import { ProductCatalogueFacadeService } from 'app/content/product-catalogue/store/product-catalogue-facade.service';
import { of } from 'rxjs';
import {
  mockBanner,
  mockProductCatalogueState,
  mockProducts
} from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';
import { ProductCatalogueService } from 'app/content/product-catalogue/services/product-catalogue.service';
import { ProductCatalogueStore } from 'app/content/product-catalogue/store/product-catalogue.store';

export function provideProductCatalogueFacadeService(): {
  provide: typeof ProductCatalogueFacadeService;
  useValue: jasmine.SpyObj<ProductCatalogueFacadeService>;
} {
  return {
    provide: ProductCatalogueFacadeService,
    useValue: mockProductCatalogueFacadeService()
  };
}

function mockProductCatalogueFacadeService(): jasmine.SpyObj<ProductCatalogueFacadeService> {
  return jasmine.createSpyObj(
    'ProductCatalogueFacadeService',
    ['loadProducts', 'loadBanner', 'addToCart'],
    { state$: of(mockProductCatalogueState()) }
  );
}

function mockProductCatalogueService(): jasmine.SpyObj<ProductCatalogueService> {
  const service = jasmine.createSpyObj('ProductCatalogueService', [
    'getProducts',
    'getBanner'
  ]);
  service.getProducts.and.returnValue(of(mockProducts));
  service.getBanner.and.returnValue(of(mockBanner));
  return service;
}

export function provideProductCatalogueStore(): {
  provide: typeof ProductCatalogueStore;
  useValue: jasmine.SpyObj<ProductCatalogueStore>;
} {
  return {
    provide: ProductCatalogueStore,
    useValue: mockProductCatalogueStore()
  };
}

function mockProductCatalogueStore(): jasmine.SpyObj<ProductCatalogueStore> {
  return jasmine.createSpyObj(
    'ProductCatalogueStore',
    ['loadProducts', 'loadBanner', 'updateProductsStatus'],
    ['state$']
  );
}

export function provideProductCatalogueService(): {
  provide: typeof ProductCatalogueService;
  useValue: jasmine.SpyObj<ProductCatalogueService>;
} {
  return {
    provide: ProductCatalogueService,
    useValue: mockProductCatalogueService()
  };
}
