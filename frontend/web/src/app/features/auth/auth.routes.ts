import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth-panel/auth-panel')
        .then(m => m.AuthPanelComponent),
  },
];
