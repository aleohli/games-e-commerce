import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageCardComponent } from 'app/shared/image-card/image-card.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ImageCardComponent', () => {
  let component: ImageCardComponent;
  let fixture: ComponentFixture<ImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCardComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
