import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutes } from './authentication-routing.module';

import { CoreModule } from '../core.module';
import { ForgotComponent } from './forgot/forgot.component';
import { SigninComponent } from './signin/signin.component';
import { ResetComponent } from './reset/reset.component';
@NgModule({
  declarations: [SigninComponent, ForgotComponent, ResetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
})
export class AuthenticationModule { }
