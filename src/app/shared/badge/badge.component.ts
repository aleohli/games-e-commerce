import { Component, input, output, OutputEmitterRef } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'gec-badge',
  imports: [NgClass],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  color = input<'grey' | 'light-grey' | 'green'>('grey');
  clickable = input<boolean>(false);
  badgeClick: OutputEmitterRef<void> = output<void>();

  onClick(): void {
    if (this.clickable) {
      this.badgeClick.emit();
    }
  }
}
