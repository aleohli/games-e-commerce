import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'gec-cart-dropdown',
  imports: [CurrencyPipe],
  templateUrl: './cart-dropdown.html',
  styleUrl: './cart-dropdown.scss'
})
export class CartDropdown {
  @Input() itemsAmount: number = 2;
  @Input() totalPrice: number = 20.2;
  @Input() products: Product[] = [
    {
      id: 5,
      name: 'Assassin’s Creed: Director’s Cut',
      price: 9.99,
      imageSrc: '/images/products/assassins_creed.png'
    },
    {
      id: 3,
      name: 'The Settlers 2: Gold Edition',
      price: 9.99,
      imageSrc: '/images/products/settlers.png'
    }
  ];
}
