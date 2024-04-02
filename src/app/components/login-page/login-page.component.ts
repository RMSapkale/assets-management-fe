import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  public showPassword: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group
      ({
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})')]]
      })
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  login() {
    alert('login successful');
  }


}
