import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { HasRoleDirective } from './core/directives/has-role.directive';

import { environment } from 'src/environments/environment';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
    
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HasRoleDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
