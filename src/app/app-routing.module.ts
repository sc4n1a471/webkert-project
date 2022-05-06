import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module')
        .then(m => m.NotFoundModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'aboutus', loadChildren: () => import('./pages/aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'offers', loadChildren: () => import('./pages/offers/offers.module').then(m => m.OffersModule), canActivate: [AuthGuard]},
  { path: 'my-contracts', loadChildren: () => import('./pages/my-contracts/my-contracts.module').then(m => m.MyContractsModule), canActivate: [AuthGuard] },
  { path: 'my-profile', loadChildren: () => import('./pages/my-profile/my-profile.module').then(m => m.MyProfileModule), canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
