import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent } from 'app/shared/badge/badge.component';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit badgeClick when clickable and clicked', () => {
    spyOn(component.badgeClick, 'emit');
    component.clickable = true;

    component.onClick();

    expect(component.badgeClick.emit).toHaveBeenCalled();
  });

  it('should not emit badgeClick when not clickable', () => {
    spyOn(component.badgeClick, 'emit');

    component.onClick();

    expect(component.badgeClick.emit).not.toHaveBeenCalled();
  });
});
