import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogueComponent } from 'app/content/product-catalogue/components/product-catalogue/product-catalogue.component';

describe('Catalogue', () => {
  let component: ProductCatalogueComponent;
  let fixture: ComponentFixture<ProductCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatalogueComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
