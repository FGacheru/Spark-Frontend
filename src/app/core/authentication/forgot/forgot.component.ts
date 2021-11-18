import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  public forgotPasswordForm!: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;
  public error: boolean = false;
  public errorMessage!: string;

  constructor(
    private _authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    })

  }

  get f() {
    console.log(this.forgotPasswordForm.controls);
    return this.forgotPasswordForm.controls;
  }

  forgotPassword() {
    this.error = false;
    this.submitted = true;
    this.loading = true;

    if (this.forgotPasswordForm.invalid) {
      this.loading = false;
      return;
    }


    this._authService.forgotPassword(this.forgotPasswordForm.value).subscribe((res) => {
      if (res) {
        this.loading = false;
        this.submitted = false;
      }

      if (res.detail === 'Failed to send email.') {
        this.error = true;
        this.errorMessage = res.detail;
        return;
      }

      this.forgotPasswordForm.reset();

    }, error => {

      this.error = true;
      this.loading = false;
      this.submitted = false;
      console.log('THERE IS AN ERROR', error);
      if (error.detail) {
        this.errorMessage = error.detail;
      }
    })
  }

  resetPassword() {

  }

}
