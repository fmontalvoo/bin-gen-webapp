import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/pages/usuarios/services/auth/auth.service';

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective {

 
  public isAuthorized: boolean = false;
  private roles = new Array<string>();

  private unsubscribe = new Subject<void>();

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  @Input() set hasRole(args: Array<string>) {
    this.roles = args;
    this.updateView();
  }

  private updateView() {
    this.authService
      .authStatus()
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(async _ => {
        this.viewContainer.clear();
        this.isAuthorized = await this.authService.hasRoles(this.roles);
        if (this.isAuthorized) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


}
