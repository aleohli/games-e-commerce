import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gec-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.scss'
})
export class ProductBannerComponent {
  @Input() title: string;
  @Input({ required: true }) imageSrc: string;
  @Input({ required: true }) productInfo: string;
  @Output() btnClick = new EventEmitter();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
