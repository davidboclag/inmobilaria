import { Routes } from '@angular/router';

export const routes: Routes = [] = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'comprar-vivienda',
    loadComponent: () => import('./pages/properties/properties.component').then(m => m.PropertiesComponent),
  },
  {
    path: 'detail-property/:provinciaUrl/:ciudadUrl/:id',
    loadComponent: () => import('./pages/detail-property/detail-property.component').then(m => m.DetailPropertyComponent)
  },
  { path: '**', redirectTo: '' }
]