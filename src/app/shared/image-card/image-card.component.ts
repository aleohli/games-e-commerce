import { Component, Input } from '@angular/core';

@Component({
  selector: 'gec-image-card',
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {
  @Input({ required: true }) info: string;
  @Input({ required: true }) imageSrc: string;
}
