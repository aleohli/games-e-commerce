import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent } from 'app/shared/badge/badge.component';
import {
  ComponentRef,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;
  let componentRef: ComponentRef<BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit badgeClick when clickable and clicked', () => {
    spyOn(component.badgeClick, 'emit');
    componentRef.setInput('clickable', true);

    component.onClick();

    expect(component.badgeClick.emit).toHaveBeenCalled();
  });

  it('should not emit badgeClick when not clickable', () => {
    spyOn(component.badgeClick, 'emit');

    component.onClick();

    expect(component.badgeClick.emit).not.toHaveBeenCalled();
  });
});
