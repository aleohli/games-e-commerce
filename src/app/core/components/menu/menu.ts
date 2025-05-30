import { Component } from '@angular/core';
import { Cart } from '../cart/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gec-menu',
  imports: [Cart, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {}
