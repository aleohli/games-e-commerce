import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  OutputEmitterRef,
  signal
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
  product = input<Product>(null);
  addToCart: OutputEmitterRef<void> = output<void>();

  mapToSignal = signal;
  productStatus = ProductStatus;

  onAddToCart(): void {
    this.addToCart.emit();
  }
}
