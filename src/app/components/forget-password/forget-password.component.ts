import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  forgetForm !: FormGroup;


  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group
      ({
        email: ["", [Validators.required, Validators.email]],
      })

  }

  getotp() {
    alert('OTP Sent');
  }

}
