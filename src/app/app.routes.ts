import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogue', pathMatch: 'full' },
  {
    path: 'catalogue',
    loadComponent: () =>
      import(
        './content/product-catalogue/components/product-catalogue/product-catalogue'
      ).then((c) => c.ProductCatalogue)
  }
];
