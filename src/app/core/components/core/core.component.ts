import { Component } from '@angular/core';
import { MenuComponent } from 'app/core/components/menu/menu.component';

@Component({
  selector: 'gec-core',
  templateUrl: './core.component.html',
  imports: [MenuComponent],
  styleUrl: './core.component.scss'
})
export class CoreComponent {}
