import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreComponent } from 'app/core/components/core/core.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuComponent } from 'app/core/components/menu/menu.component';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreComponent]
    })
      .overrideComponent(CoreComponent, {
        add: { schemas: [CUSTOM_ELEMENTS_SCHEMA] },
        remove: { imports: [MenuComponent] }
      })
      .compileComponents();

    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
