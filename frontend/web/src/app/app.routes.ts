import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/marketing/marketing.routes')
        .then(m => m.marketingRoutes)
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./features/shop/shop-page/shop-page')
        .then(m => m.ShopPageComponent),
  },
];
