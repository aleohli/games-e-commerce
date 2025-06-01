import { TestBed } from '@angular/core/testing';
import { ProductCatalogueService } from './product-catalogue.service';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import {
  mockBanner,
  mockProducts
} from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';
import { provideHttpClient } from '@angular/common/http';

describe('ProductCatalogueService', () => {
  let service: ProductCatalogueService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ProductCatalogueService
      ]
    });
    service = TestBed.inject(ProductCatalogueService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products', (done) => {
    service.getProducts().subscribe((products) => {
      expect(products).toEqual(mockProducts);
      done();
    });

    http
      .expectOne({
        method: 'GET',
        url: 'http://localhost:3000/products'
      })
      .flush(mockProducts);
  });

  it('should fetch banner', (done) => {
    service.getBanner().subscribe((banner) => {
      expect(banner).toEqual(mockBanner);
      done();
    });

    http
      .expectOne({
        method: 'GET',
        url: 'http://localhost:3000/banner'
      })
      .flush(mockBanner);
  });
});
