import {
  Component,
  DestroyRef,
  inject,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { NgClass } from '@angular/common';
import {
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayRef
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CartDropdown } from '../cart-dropdown/cart-dropdown';

@Component({
  selector: 'gec-cart',
  imports: [CartDropdown, NgClass],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  @ViewChild('cartDropdown') cartDropdown: TemplateRef<any>;

  amount: number = 1;
  private overlayRef: OverlayRef;
  private destroyRef = inject(DestroyRef);

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  get isEmpty(): boolean {
    return !this.amount;
  }

  openDropdown(element: HTMLElement): void {
    if (!this.isEmpty) {
      this.handleDropdownOpen(element);
    }
  }

  private handleDropdownOpen(element: HTMLElement): void {
    if (this.overlayRef) {
      this.closeDropdown();
      return;
    }
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
}
