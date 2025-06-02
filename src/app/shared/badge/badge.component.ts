import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'gec-badge',
  imports: [NgClass],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  @Input() color: 'grey' | 'light-grey' | 'green' = 'grey';
  @Input() clickable = false;
  @Output() badgeClick = new EventEmitter<void>();

  onClick(): void {
    if (this.clickable) {
      this.badgeClick.emit();
    }
  }
}
