import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


//  Configuration of the slot
const routes: Routes = [
  {

    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'home', component: HomePageComponent },
      { path: '**', redirectTo: 'login' },
    ]

  }
]





@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [ RouterModule ],
  providers: [],
})
export class AngularAuthRoutingModule { }
