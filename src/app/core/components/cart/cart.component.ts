import {
  Component,
  DestroyRef,
  effect,
  inject,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayRef
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CartDropdownComponent } from 'app/core/components/cart-dropdown/cart-dropdown.component';
import { NgClass } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { CartStore } from 'app/core/store/cart.store';

@Component({
  selector: 'gec-cart',
  imports: [CartDropdownComponent, NgClass],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  animations: [
    trigger('countAnimation', [
      transition('* => *', [
        animate('500ms ease-out', style({ transform: 'scale(1.3)' })),
        animate('100ms', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class CartComponent {
  @ViewChild('cartDropdown') cartDropdown: TemplateRef<void>;

  store = inject(CartStore);
  private overlayRef: OverlayRef;
  private destroyRef = inject(DestroyRef);
  private overlay = inject(Overlay);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.store.isEmpty()) {
        this.closeDropdown();
      }
    });
  }

  openDropdown(element: HTMLElement): void {
    if (!this.store.isEmpty()) {
      this.handleDropdownOpen(element);
    }
  }

  private handleDropdownOpen(element: HTMLElement): void {
    this.prepareOverlayRef(element);
    this.overlayRef
      .backdropClick()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.closeDropdown());
  }

  private prepareOverlayRef(element: HTMLElement): void {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.getPositionStrategy(element),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });

    this.overlayRef.attach(
      new TemplatePortal(this.cartDropdown, this.viewContainerRef)
    );
  }

  private getPositionStrategy(
    element: HTMLElement
  ): FlexibleConnectedPositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(element)
      .withPositions([
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
      ]);
  }

  closeDropdown(): void {
    this.overlayRef?.dispose();
    this.overlayRef = null;
  }

  onClearCart(): void {
    this.store.clearCart();
  }

  onRemoveProduct(productId: number): void {
    this.store.removeProduct(productId);
  }
}
