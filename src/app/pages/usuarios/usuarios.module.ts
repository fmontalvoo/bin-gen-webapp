import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { ReactiveFormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UsuariosComponent,
    LoginComponent,
  ],
})
export class UsuariosModule { }
