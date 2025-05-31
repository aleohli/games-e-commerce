import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    loadComponent: () =>
      import(
        'app/content/product-catalogue/components/product-catalogue/product-catalogue.component'
      ).then((c) => c.ProductCatalogueComponent)
  }
];
