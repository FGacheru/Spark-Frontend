import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services';
import { MustMatch } from '../../helpers/must-match';
import { PasswordValidator } from '../../helpers/password-validator';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  public resetPasswordForm!: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;
  public error: boolean = false;
  public errorMessage!: string;
  public passwordType: String = 'password';
  public togglePasswordShow: Boolean = true;

  constructor(
    private _authService:AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', 
        [
          Validators.required, 
          PasswordValidator(/\d/, {hasNumber: true} ),
          PasswordValidator(/[A-Z]/, {hasCapitalCase: true} ),
          PasswordValidator(/[a-z]/, {hasSmallCase: true} ),
          PasswordValidator(/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/, {hasSpecialCharacters: true} ),
          Validators.minLength(8) 
        ]
      ],
      confirm_password: ['', Validators.required]
    }, {
      validator: [ 
        MustMatch('password', 'confirm_password')
      ],
    });
  }


  get f() { 
    console.log(this.resetPasswordForm.controls);
    return this.resetPasswordForm.controls; 
  }

  resetPassword() {
    this.error = false;
    this.submitted = true;
    this.loading = true;

    if (this.resetPasswordForm.invalid) {
      this.loading = false;
      return;
    }

     
    this._authService.resetPassowrd(this.resetPasswordForm.value).subscribe((res) => {
      if (res) {
        this.loading = false;
        this.submitted = false;
      }

      this.resetPasswordForm.reset();

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

  toggleShowPassword() {
    this.togglePasswordShow = !this.togglePasswordShow;
    this.passwordType = this._authService.toggleShowPassword(this.passwordType);
  }

}
