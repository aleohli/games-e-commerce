import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCatalogueComponent } from 'app/content/product-catalogue/components/product-catalogue/product-catalogue.component';
import { ProductCatalogueFacadeService } from 'app/content/product-catalogue/store/product-catalogue-facade.service';
import { mockProducts } from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';
import {
  provideProductCatalogueFacadeService,
  provideProductCatalogueStore
} from 'app/content/product-catalogue/mocks/mock-services.spec';
import { ProductCatalogueStore } from 'app/content/product-catalogue/store/product-catalogue.store';
import { ImageCardComponent } from 'app/shared/image-card/image-card.component';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';

describe('ProductCatalogueComponent', () => {
  let component: ProductCatalogueComponent;
  let fixture: ComponentFixture<ProductCatalogueComponent>;
  let productCatalogueFacadeService: ProductCatalogueFacadeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatalogueComponent],
      providers: [
        provideProductCatalogueFacadeService(),
        provideProductCatalogueStore(),
        provideExperimentalZonelessChangeDetection()
      ]
    })
      .overrideComponent(ProductCatalogueComponent, {
        add: { schemas: [CUSTOM_ELEMENTS_SCHEMA] },
        remove: {
          imports: [ImageCardComponent],
          providers: [ProductCatalogueStore, ProductCatalogueFacadeService]
        }
      })
      .compileComponents();

    productCatalogueFacadeService = TestBed.inject(
      ProductCatalogueFacadeService
    );
    fixture = TestBed.createComponent(ProductCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load Products', () => {
    expect(productCatalogueFacadeService.loadProducts).toHaveBeenCalled();
  });

  it('should load Banner', () => {
    expect(productCatalogueFacadeService.loadBanner).toHaveBeenCalled();
  });

  it('should console log on banner click', () => {
    spyOn(console, 'log');
    console.log = jasmine.createSpy();
    component.onBannerBtnClick();
    expect(console.log).toHaveBeenCalledWith(
      "A hidden button that I should've totally implemented clicked!"
    );
  });

  it('should add to cart', () => {
    component.onAddToCart(mockProducts[0]);
    expect(productCatalogueFacadeService.addToCart).toHaveBeenCalledWith(
      mockProducts[0]
    );
  });
});
