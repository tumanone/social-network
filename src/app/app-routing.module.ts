import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {ContentComponent} from "./core/content/content.component";

export const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: ContentComponent,
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
