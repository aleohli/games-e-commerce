import { Component } from '@angular/core';
import { Menu } from '../menu/menu';

@Component({
  selector: 'gec-core',
  templateUrl: './core.html',
  imports: [Menu],
  styleUrl: './core.scss'
})
export class Core {}
