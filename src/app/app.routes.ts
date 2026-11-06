import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
    path: 'productos/:id',
    loadComponent: () => import('./pages/Productos/productos/productos.page').then( m => m.ProductosPage)
  },
  {
    path: 'mi-restaurante',
    loadComponent: () => import('./pages/Restaurantes/mi-restaurante/mi-restaurante.page').then( m => m.MiRestaurantePage)
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./pages/Favoritos/favoritos/favoritos.page').then( m => m.FavoritosPage)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./pages/Carrito/carrito/carrito.page').then( m => m.CarritoPage)
  },
  {
  path: 'restaurantes',
  loadComponent: () => import('./pages/Restaurantes/restaurante/restaurante.page').then(m => m.RestaurantePage)
  },
];