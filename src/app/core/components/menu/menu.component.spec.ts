import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from 'app/core/components/menu/menu.component';
import { provideRouter } from '@angular/router';
import { CartComponent } from 'app/core/components/cart/cart.component';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [
        provideRouter([]),
        provideExperimentalZonelessChangeDetection()
      ]
    })
      .overrideComponent(MenuComponent, {
        add: { schemas: [CUSTOM_ELEMENTS_SCHEMA] },
        remove: { imports: [CartComponent] }
      })
      .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
