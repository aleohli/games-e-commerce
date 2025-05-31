import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ProductBannerComponent } from 'app/content/product-catalogue/components/product-banner/product-banner.component';
import { ImageCardComponent } from 'app/shared/image-card/image-card.component';
import { ProductContentComponent } from 'app/content/product-catalogue/components/product-content/product-content.component';
import {
  ProductCatalogueState,
  ProductCatalogueStore
} from 'app/content/product-catalogue/store/product-catalogue.store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductCatalogueFacadeService } from 'app/content/product-catalogue/store/product-catalogue-facade.service';
import { Product } from 'app/content/product-catalogue/models/product';

@Component({
  selector: 'gec-product-catalogue',
  imports: [
    ProductBannerComponent,
    ImageCardComponent,
    ProductContentComponent
  ],
  templateUrl: './product-catalogue.component.html',
  styleUrl: './product-catalogue.component.scss',
  providers: [ProductCatalogueStore, ProductCatalogueFacadeService]
})
export class ProductCatalogueComponent implements OnInit {
  state: ProductCatalogueState;
  storeFacade = inject(ProductCatalogueFacadeService);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.storeFacade.loadProducts();
    this.storeFacade.loadBanner();
    this.storeFacade.state$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        this.state = state;
      });
  }

  onBannerBtnClick(): void {
    console.log(
      "A hidden button that I should've totally implemented clicked!"
    );
  }

  onAddToCart(product: Product): void {
    this.storeFacade.addToCart(product);
  }
}
