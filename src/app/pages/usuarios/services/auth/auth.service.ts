import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  public login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  public signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  public logout() {
    return this.auth.signOut();
  }

  public authStatus() {
    return this.auth.authState;
  }

  public currentUser() {
    return this.auth.currentUser;
  }


  public async hasRoles(selor: string[]) {
    let hasRole = false;
    await this.currentUser()
      .then(
        async user => {
          const idTokenResult = await user?.getIdTokenResult();
          const data = idTokenResult;
          if (data?.claims != null) {
            const claims = data.claims;
            if (claims.hasOwnProperty('roles')) {
              const roles = claims['roles'];
              for (const rol of selor) {
                if (roles.hasOwnProperty(rol)) {
                  const role = roles[rol];
                  if (role) {
                    hasRole = role;
                    break;
                  }
                }
              }
            }
          }
        }
      );
    return hasRole;
  }

}
