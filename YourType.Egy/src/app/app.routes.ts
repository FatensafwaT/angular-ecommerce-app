import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth-module').then(m => m.AuthModule)
  },
  { path: 'register',
  loadComponent: () =>
    import('./auth/register/register').then(m => m.RegisterComponent)} ,
  {
  path: 'products',
  loadComponent: () =>
    import('./components/products/products').then(m => m.ProductsComponent),
  canActivate: [AuthGuard]
},
{
  path: 'cart',
  loadComponent: () =>
    import('./components/cart/cart').then(m => m.CartComponent),
  canActivate: [AuthGuard]
}


  
];
