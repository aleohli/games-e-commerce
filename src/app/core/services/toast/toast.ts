import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Toast {
  showSuccessToast(message: string): void {}

  showErrorToast(message: string): void {}
}
