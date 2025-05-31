import { TestBed } from '@angular/core/testing';

import { ProductCatalogueService } from './product-catalogue.service';

describe('ProductCatalogueService', () => {
  let service: ProductCatalogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCatalogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
