import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationUtils } from '../../utils/validators.util';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss',
})



export class RegistrationPageComponent {
  registrationForm !: FormGroup;
  submitted: boolean = false;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;


  constructor(private formBuilder: FormBuilder) {
  }

  Salutations: string[] =
    ['Mr.', 'Mrs.', 'Miss.', 'Dr.', 'Ms.', 'Prof.', 'Other',];



  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      FullName: ["", Validators.required],
      UserName: ["", Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      Email: ["", Validators.required, Validators.email],
      PhoneNumber: ["", Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      password: ["", Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)],
      confirmPassword: ['', Validators.required],
    }, {
      validators: ValidationUtils.mustMatch('password', 'confirmPassword')
    });
  }



  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    this.submitted = true;
  }
}






