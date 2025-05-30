import { Component, Input } from '@angular/core';

@Component({
  selector: 'gec-image-card',
  imports: [],
  templateUrl: './image-card.html',
  styleUrl: './image-card.scss'
})
export class ImageCard {
  @Input() id: string;
  @Input() imageSrc: string;
}
