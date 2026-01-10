import { Routes } from '@angular/router';

export const marketingRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing-page/landing-page')
        .then(m => m.LandingPageComponent),
  }
]
