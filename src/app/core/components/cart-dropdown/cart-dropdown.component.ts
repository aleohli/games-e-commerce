import { Component, input, output, OutputEmitterRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from 'app/core/models/product';

@Component({
  selector: 'gec-cart-dropdown',
  imports: [CurrencyPipe],
  templateUrl: './cart-dropdown.component.html',
  styleUrl: './cart-dropdown.component.scss'
})
export class CartDropdownComponent {
  cart = input.required<Product[]>();
  totalPrice = input.required<number>();
  amount = input.required<number>();
  clearCart: OutputEmitterRef<void> = output<void>();
  removeProduct: OutputEmitterRef<number> = output<number>();

  onClearCart(): void {
    this.clearCart.emit();
  }

  onRemoveProduct(productId: number): void {
    this.removeProduct.emit(productId);
  }
}
