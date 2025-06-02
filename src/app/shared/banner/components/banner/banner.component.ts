import { Component, input, output, OutputEmitterRef } from '@angular/core';
import { Banner } from 'app/shared/banner/models/banner';

@Component({
  selector: 'gec-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  banner = input.required<Banner>();
  btnClick: OutputEmitterRef<void> = output<void>();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
