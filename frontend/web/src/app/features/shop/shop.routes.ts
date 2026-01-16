import { Routes } from '@angular/router';

export const shopRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shop-page/shop-page')
        .then(m => m.ShopPageComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./product-details-page/product-details-page')
        .then(m => m.ProductDetailsPageComponent),
  }
]
