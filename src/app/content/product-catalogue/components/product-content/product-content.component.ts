import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  Product,
  ProductStatus
} from 'app/content/product-catalogue/models/product';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { BadgeComponent } from 'app/shared/badge/badge.component';

@Component({
  selector: 'gec-product-content',
  imports: [PercentPipe, CurrencyPipe, BadgeComponent],
  templateUrl: './product-content.component.html',
  styleUrl: './product-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContentComponent {
  @Input({ required: true }) product: Product;
  @Output() addToCart = new EventEmitter<void>();

  productStatus = ProductStatus;

  onAddToCart(): void {
    this.addToCart.emit();
  }
}
