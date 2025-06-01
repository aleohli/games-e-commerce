import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Banner } from 'app/content/product-catalogue/models/banner';

@Component({
  selector: 'gec-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBannerComponent {
  @Input({ required: true }) banner: Banner;
  @Output() btnClick = new EventEmitter();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
