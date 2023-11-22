import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// * Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

// * Components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

// * Modules
import { AngularAuthRoutingModule } from './angular-auth-routing.module';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LayoutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AngularAuthRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
})
export class AngularAuthModule { }
