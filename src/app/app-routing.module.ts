import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';

const routes: Routes = [
  { path: '', redirectTo : 'login-page', pathMatch : 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'Registration', component: RegistrationPageComponent },
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'verify-otp', component:VerifyOtpComponent},
  {path: 'set-password', component:SetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
