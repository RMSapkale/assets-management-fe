import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss',
})



export class RegistrationPageComponent {
  showPassword: any;
  registrationform !: FormGroup;
  submitted: boolean = false;
  hidePassword: boolean = true;

  constructor(private formBuilder: FormBuilder) {
  }

  Salutations: string[] =
    ['Mr.', 'Mrs.', 'Miss.', 'Dr.', 'Ms.', 'Prof.', 'Other',];



  ngOnInit(): void {
    this.registrationform = this.formBuilder.group
      ({
        FullName: ["", Validators.required],
        UserName: ["", Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
        Email: ["", Validators.required, Validators.email],
        PhoneNumber: ["", Validators.required, Validators.minLength(10), Validators.maxLength(10)],
        password: ["", Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)],
        confirmPassword: ['', Validators.required],
    }, {
      validators: this.mustMatch('password', 'confirmPassword')
    }      );
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






