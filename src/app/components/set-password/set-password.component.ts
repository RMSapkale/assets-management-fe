import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl,ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss'
})
export class SetPasswordComponent {
setpassword !: FormGroup;
ConfirmPassword : any;


  constructor(private formBuilder : FormBuilder){ 
  }

  ngOnInit(): void {
    this.setpassword = this.formBuilder.group({
        newpassword : ['', [Validators.required,Validators.minLength(8), Validators.maxLength(15)]],
        confirmpassword : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      },{Validators:this.matchValidators('newpassword','ConfirmPassword')});
      }
      
      matchValidators (controlName:string, matchingControlName:string): ValidatorFn {
        return (abstractControl:AbstractControl) =>  {
          const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);

      if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
        return null;
        }
        if (control!.value !== matchingControl!.value) {
          const error={ confirmedValidator: 'Passwords do not match.' };
          matchingControl!.setErrors(error);
          return error;
        } else {
          matchingControl!.setErrors(null);
          return null;
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

  
}
