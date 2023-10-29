import { Routes } from '@angular/router';

export const routes: Routes = [] = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'comprar-vivienda',
    loadChildren: () => import('./pages/properties/routes'),
  },
  { path: '**', redirectTo: '' }
]