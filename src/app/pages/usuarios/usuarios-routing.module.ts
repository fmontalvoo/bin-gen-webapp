import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './usuarios.component';

import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

const redirectLoggedInToGenerator = () => redirectLoggedInTo(['/generador/secuencial']);

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      {
        path: 'login',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToGenerator },
        component: LoginComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
