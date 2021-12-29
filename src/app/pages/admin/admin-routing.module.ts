import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, customClaims } from '@angular/fire/compat/auth-guard';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const hasRole = (roles: string[], redirect: string | any[]) => {
  return pipe(customClaims, map(claims => {
    if (claims.hasOwnProperty('roles')) {
      let hasRole: boolean = false;
      roles.forEach(role => {
        if (claims['roles'].hasOwnProperty(role))
          hasRole ||= claims['roles'][role];
      });
      return hasRole || redirect;
    }
    return redirect;
  }));
}

const canAcces = () => hasRole(['admin'], ['']);

const routes: Routes = [{
  path: '', canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: canAcces }, component: AdminComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
