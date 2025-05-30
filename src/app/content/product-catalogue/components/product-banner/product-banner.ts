import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gec-product-banner',
  imports: [],
  templateUrl: './product-banner.html',
  styleUrl: './product-banner.scss'
})
export class ProductBanner {
  @Input() title: string;
  @Input() imageSrc: string;
  @Output() btnClick = new EventEmitter();

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
