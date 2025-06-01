import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gec-image-card',
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCardComponent {
  @Input({ required: true }) info: string;
  @Input({ required: true }) imageSrc: string;
}
