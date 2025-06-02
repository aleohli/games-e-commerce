import { Component, input, Signal } from '@angular/core';

@Component({
  selector: 'gec-image-card',
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {
  info = input.required<string>();
  imageSrc: Signal<string> = input.required<string>();
}
