import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit
} from '@angular/core';
import { ImageCardComponent } from 'app/shared/image-card/image-card.component';
import { ProductContentComponent } from 'app/content/product-catalogue/components/product-content/product-content.component';
import {
  ProductCatalogueState,
  ProductCatalogueStore
} from 'app/content/product-catalogue/store/product-catalogue.store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductCatalogueFacadeService } from 'app/content/product-catalogue/store/product-catalogue-facade.service';
import { Product } from 'app/content/product-catalogue/models/product';
import { BannerComponent } from 'app/shared/banner/components/banner/banner.component';

@Component({
  selector: 'gec-product-catalogue',
  imports: [ImageCardComponent, ProductContentComponent, BannerComponent],
  templateUrl: './product-catalogue.component.html',
  styleUrl: './product-catalogue.component.scss',
  providers: [ProductCatalogueStore, ProductCatalogueFacadeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCatalogueComponent implements OnInit {
  state: ProductCatalogueState;
  storeFacade = inject(ProductCatalogueFacadeService);
  destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.storeFacade.loadProducts();
    this.storeFacade.loadBanner();
    this.storeFacade.state$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        this.state = state;
        this.cdr.markForCheck();
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
