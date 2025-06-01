import { TestBed } from '@angular/core/testing';
import { AppComponent } from 'app/app.component';
import { RouterOutlet } from '@angular/router';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';
import { CoreComponent } from 'app/core/components/core/core.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    })
      .overrideComponent(AppComponent, {
        add: { schemas: [CUSTOM_ELEMENTS_SCHEMA] },
        remove: { imports: [CoreComponent, RouterOutlet] }
      })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
