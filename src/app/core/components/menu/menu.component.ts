import { Component } from '@angular/core';
import { CartComponent } from 'app/core/components/cart/cart.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gec-menu',
  imports: [CartComponent, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {}
