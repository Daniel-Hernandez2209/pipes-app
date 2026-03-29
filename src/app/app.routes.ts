import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'pipes basicos',
    loadComponent: () => import('./pages/basic-page/basic-page'),
  },
  {
    path: 'numbers',
    title: 'pipes de numeros',
    loadComponent: () => import('./pages/numbers-page/numbers-page'),
  },
  {
    path: 'custom',
    title: 'pipes personalizados',
    loadComponent: () => import('./pages/custom-page/custom-page'),
  },
  {
    path: 'uncommon',
    title: 'pipes inusuales',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
