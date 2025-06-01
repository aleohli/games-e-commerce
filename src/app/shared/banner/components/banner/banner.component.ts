import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Banner } from 'app/shared/banner/models/banner';

@Component({
  selector: 'gec-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  @Input({ required: true }) banner: Banner;
  @Output() btnClick = new EventEmitter();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
