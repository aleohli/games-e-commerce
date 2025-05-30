import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'gec-badge',
  imports: [NgClass],
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class Badge {
  @Input() color: 'grey' | 'light-grey' | 'green' = 'grey';
  @Input() clickable = false;
  @Output() badgeClick = new EventEmitter<Event>();

  onClick(event: Event) {
    if (this.clickable) {
      this.badgeClick.emit(event);
    }
  }
}
