import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartState } from 'app/core/store/cart/cart.reducer';

@Component({
  selector: 'gec-cart-dropdown',
  imports: [CurrencyPipe],
  templateUrl: './cart-dropdown.component.html',
  styleUrl: './cart-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDropdownComponent {
  @Input({ required: true }) cartState: CartState;
  @Output() clearCart = new EventEmitter<void>();
  @Output() removeProduct = new EventEmitter<number>();

  onClearCart(): void {
    this.clearCart.emit();
  }

  onRemoveProduct(productId: number): void {
    this.removeProduct.emit(productId);
  }
}
