import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationUtils } from '../../utils/validators.util';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss'
})

export class SetPasswordComponent {
  setpassword !: FormGroup;
  submitted: boolean = false;
  hidePassword: boolean = true;
  showpassword: any;
  showpassword1: boolean = false;
  showpassword2: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.setpassword = this.formBuilder.group({
      password: ["", Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)],
      confirmpassword: ['', Validators.required],
    }, {
      validators: ValidationUtils.mustMatch('password', 'confirmpassword')
    });
  }

  togglePasswordVisibility1(): void {
    this.showpassword1 = !this.showpassword1;
  }

  togglePasswordVisibility2(): void {
    this.showpassword2 = !this.showpassword2;
  }

  onSubmit() {
    this.submitted = true;
  }
}
