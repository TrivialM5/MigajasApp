import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:folder',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/Auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/Auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'restaurante',
    loadComponent: () => import('./pages/Restaurantes/restaurante/restaurante.page').then( m => m.RestaurantePage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/Productos/productos/productos.page').then( m => m.ProductosPage)
  },
  {
    path: 'mi-restaurante',
    loadComponent: () => import('./pages/Restaurantes/mi-restaurante/mi-restaurante.page').then( m => m.MiRestaurantePage)
  },
];
