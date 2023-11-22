import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./angular-auth/angular-auth.module').then(modulo => modulo.AngularAuthModule )
  },

  {
    path: '**',
    redirectTo: 'gameverse'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
