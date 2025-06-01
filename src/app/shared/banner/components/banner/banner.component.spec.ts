import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from 'app/shared/banner/components/banner/banner.component';
import { mockBanner } from 'app/content/product-catalogue/mocks/mock-products-catalogue-state.spec';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    component.banner = mockBanner;
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
