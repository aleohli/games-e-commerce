import { Component, inject } from '@angular/core';
import { ImageCardComponent } from 'app/shared/image-card/image-card.component';
import { ProductContentComponent } from 'app/content/product-catalogue/components/product-content/product-content.component';
import { ProductCatalogueStore } from 'app/content/product-catalogue/store/product-catalogue.store';
import { ProductCatalogueFacadeService } from 'app/content/product-catalogue/store/product-catalogue-facade.service';
import { Product } from 'app/content/product-catalogue/models/product';
import { BannerComponent } from 'app/shared/banner/components/banner/banner.component';

@Component({
  selector: 'gec-product-catalogue',
  imports: [ImageCardComponent, ProductContentComponent, BannerComponent],
  templateUrl: './product-catalogue.component.html',
  styleUrl: './product-catalogue.component.scss',
  providers: [ProductCatalogueStore, ProductCatalogueFacadeService]
})
export class ProductCatalogueComponent {
  storeFacade = inject(ProductCatalogueFacadeService);

  onBannerBtnClick(): void {
    console.log(
      "A hidden button that I should've totally implemented clicked!"
    );
  }

  onAddToCart(product: Product): void {
    this.storeFacade.addToCart(product);
  }
}
