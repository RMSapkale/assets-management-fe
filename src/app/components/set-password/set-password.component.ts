import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.setpassword = this.formBuilder.group({
      password: ["", Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)],
      confirmpassword: ['', Validators.required],
    }, {
      Validators: this.mustMatch('password', 'confirmpassword')
    });
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName]
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true })
      }
      else {
        matchingControl.setErrors(null);
      }
    }
  }


  public showPassword1: boolean = false;
  public showPassword2: boolean = false;
  public togglePasswordVisibility1(): void {
    this.showPassword1 = !this.showPassword1;
  }

  public togglePasswordVisibility2(): void {
    this.showPassword2 = !this.showPassword2;
  }

  onSubmit() {
    this.submitted = true;
  }
}
