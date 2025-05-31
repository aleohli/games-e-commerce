import {
  Component,
  DestroyRef,
  inject,
  OnInit,
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
import { CartState, selectCartState } from 'app/core/store/cart/cart.reducer';
import { Store } from '@ngrx/store';
import { clearCart, removeProduct } from 'app/core/store/cart/cart.actions';
import { NgClass } from '@angular/common';

@Component({
  selector: 'gec-cart',
  imports: [CartDropdownComponent, NgClass],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  @ViewChild('cartDropdown') cartDropdown: TemplateRef<any>;
  cartState: CartState;

  private overlayRef: OverlayRef;
  private destroyRef = inject(DestroyRef);
  private overlay = inject(Overlay);
  private viewContainerRef = inject(ViewContainerRef);
  private store = inject(Store);

  ngOnInit(): void {
    this.store
      .select(selectCartState)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        this.cartState = state;
        if (this.isEmpty) {
          this.closeDropdown();
        }
      });
  }

  get isEmpty(): boolean {
    return !this.cartState.amount;
  }

  openDropdown(element: HTMLElement): void {
    if (!this.isEmpty) {
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
    this.store.dispatch(clearCart());
  }

  onRemoveProduct(productId: number): void {
    this.store.dispatch(removeProduct({ productId }));
  }
}
