import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss',
})



export class RegistrationPageComponent {
  registrationform !: FormGroup;
  submitted: boolean = false;
  hidePassword: boolean = true;
  showpassword: any;


  constructor(private formBuilder: FormBuilder) {
  }

  Salutations: string[] =
    ['Mr.', 'Mrs.', 'Miss.', 'Dr.', 'Ms.', 'Prof.', 'Other',];



  ngOnInit(): void {
    this.registrationform = this.formBuilder.group({
      FullName: ["", Validators.required],
      UserName: ["", Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      Email: ["", Validators.required, Validators.email],
      PhoneNumber: ["", Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      password: ["", Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)],
      confirmpassword: ['', Validators.required],
    }, {
      validators: this.mustMatch('password', 'confirmpassword')
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

  public showpassword1: boolean = false;
  public showpassword2: boolean = false;

  public togglePasswordVisibility1(): void {
    this.showpassword1 = !this.showpassword1;
  }

  public togglePasswordVisibility2(): void {
    this.showpassword2 = !this.showpassword2;
  }

  onSubmit() {
    this.submitted = true;
  }
}






