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
    loadChildren: () =>
      import('./features/shop/shop.routes')
        .then(m => m.shopRoutes),
  },
];
