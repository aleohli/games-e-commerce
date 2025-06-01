import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from 'app/shared/banner/components/banner/banner.component';
import { mockBanner } from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';
import {
  ComponentRef,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let componentRef: ComponentRef<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('banner', mockBanner);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit btnClick when onBtnClick is called', () => {
    spyOn(component.btnClick, 'emit');
    component.onBtnClick();
    expect(component.btnClick.emit).toHaveBeenCalled();
  });
});
