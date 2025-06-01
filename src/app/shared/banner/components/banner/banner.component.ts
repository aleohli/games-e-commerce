import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  OutputEmitterRef
} from '@angular/core';
import { Banner } from 'app/shared/banner/models/banner';

@Component({
  selector: 'gec-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  banner = input<Banner>(null);
  btnClick: OutputEmitterRef<void> = output<void>();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
