import {
  ChangeDetectionStrategy,
  Component,
  input,
  Signal
} from '@angular/core';

@Component({
  selector: 'gec-image-card',
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCardComponent {
  info = input<string>('');
  imageSrc: Signal<string> = input<string>('');
}
