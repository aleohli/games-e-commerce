import { Component, Input } from '@angular/core';
import { ProductBanner } from 'app/content/product-catalogue/components/product-banner/product-banner';
import { ImageCard } from 'app/shared/image-card/image-card';
import {
  Product,
  ProductStatus
} from 'app/content/product-catalogue/models/product';
import { Badge } from 'app/shared/badge/badge';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'gec-product-catalogue',
  imports: [
    ProductBanner,
    ImageCard,
    ProductBanner,
    ImageCard,
    Badge,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './product-catalogue.html',
  styleUrl: './product-catalogue.scss'
})
export class ProductCatalogue {
  @Input() products: Product[] = [
    {
      id: 1,
      name: 'Oddworld: Stranger’s wrath',
      price: 9.99,
      discount: 0,
      imageSrc: '/images/products/oddworld.png',
      status: ProductStatus.NOT_OWNED
    },
    {
      id: 2,
      name: 'Chaos on Deponia',
      price: 10.99,
      discount: 0.5,
      imageSrc: '/images/products/chaos_on_deponia.png',
      status: ProductStatus.OWNED
    },
    {
      id: 3,
      name: 'The Settlers 2: Gold Edition',
      price: 5.99,
      imageSrc: '/images/products/settlers.png',
      discount: 0,
      status: ProductStatus.IN_CART
    },
    {
      id: 4,
      name: 'Neverwinter Nights',
      price: 9.99,
      imageSrc: '/images/products/neverwinter_nights.png',
      discount: 0.5,
      status: ProductStatus.NOT_OWNED
    },
    {
      id: 5,
      name: 'Assassin’s Creed: Director’s Cut',
      price: 9.99,
      discount: 0.5,
      imageSrc: '/images/products/assassins_creed.png',
      status: ProductStatus.IN_CART
    }
  ];

  productStatus = ProductStatus;

  onBannerBtnClick(): void {
    console.log(
      "A hidden button that I should've totally implemented clicked!"
    );
  }
}
