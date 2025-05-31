import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContentComponent } from 'app/content/product-catalogue/components/product-content/product-content.component';

describe('ProductCardContent', () => {
  let component: ProductContentComponent;
  let fixture: ComponentFixture<ProductContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
