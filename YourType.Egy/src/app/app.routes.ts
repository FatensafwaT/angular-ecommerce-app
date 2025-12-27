import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { Details } from './components/details/details';
import { CheckOut } from './components/check-out/check-out';

export const routes: Routes = [
 { path: '', redirectTo: 'products', pathMatch: 'full' },
{
  path: 'products',
  loadComponent: () =>
    import('./components/products/products').then(m => m.ProductsComponent),
  
},
{
  path: 'cart',
  loadComponent: () =>
    import('./components/cart/cart').then(m => m.CartComponent),
  canActivate: [AuthGuard]
},
{
  path: 'login',
  loadComponent: () =>
    import('./auth/login/login').then(m => m.LoginComponent)
},
{
  path: 'register',
  loadComponent: () =>
    import('./auth/register/register').then(m => m.RegisterComponent)
},
{ path: 'details/:id', component: Details },
{ path: 'checkout', component: CheckOut },

{ path: '**', redirectTo: 'login' }

];
