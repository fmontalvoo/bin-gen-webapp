import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from 'src/app/pages/usuarios/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  public isLoggedIn!: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.authService.authStatus()
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe((data: any) => {
        if (data?.uid != null)
          this.isLoggedIn = true;
        else
          this.isLoggedIn = false;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public logout(): void {
    this.authService.logout()
      .then(_ => {
        this.isLoggedIn = false;
        location.href = '/';
      });
  }

}
