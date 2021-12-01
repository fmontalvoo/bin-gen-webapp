import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public signinForm!: FormGroup;
  public loading: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  private crearFormulario() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      password: ['', Validators.required],
    });
  }

  public onSubmit() {
    if (this.signinForm.invalid) {
      return Object.values(this.signinForm.controls).forEach(control => {
        if (control instanceof FormGroup)
          Object.values(control.controls).forEach(ctrl => ctrl.markAsTouched());
        else
          control.markAsTouched();
      });
    }
    this.loading = true;

    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    this.auth.login(email, password)
      .then(_ => {
        this.loading = false;
        this.router.navigate(['/generador/secuencial']);
      })
      .catch(error => {
        this.loading = false;
      });

    this.signinForm.reset();
  }

  public isInValid(input: string) {
    return this.signinForm.get(input)?.invalid && this.signinForm.get(input)?.touched;
  }

  public isValid(input: string) {
    return this.signinForm.get(input)?.valid;
  }

}
