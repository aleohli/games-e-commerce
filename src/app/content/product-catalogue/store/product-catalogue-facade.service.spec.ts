import { TestBed } from '@angular/core/testing';

import { ProductCatalogueFacadeService } from './product-catalogue-facade.service';

describe('ProductCatalogueFacadeService', () => {
  let service: ProductCatalogueFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCatalogueFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
