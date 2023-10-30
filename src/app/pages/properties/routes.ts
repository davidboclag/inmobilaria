import { Route } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./properties.component').then(m => m.PropertiesComponent),
    },
    {
        path: ':provinciaUrl/:ciudadUrl/:id',
        loadComponent: () => import('./detail-property.component').then(m => m.DetailPropertyComponent)
    },
] as Route[];