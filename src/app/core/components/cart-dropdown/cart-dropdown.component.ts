import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  OutputEmitterRef
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from 'app/core/models/product';

@Component({
  selector: 'gec-cart-dropdown',
  imports: [CurrencyPipe],
  templateUrl: './cart-dropdown.component.html',
  styleUrl: './cart-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDropdownComponent {
  cart = input<Product[]>([]);
  totalPrice = input<number>(0);
  amount = input<number>(0);
  clearCart: OutputEmitterRef<void> = output<void>();
  removeProduct: OutputEmitterRef<number> = output<number>();

  onClearCart() {
    this.clearCart.emit();
  }

  onRemoveProduct(productId: number) {
    this.removeProduct.emit(productId);
  }
}
