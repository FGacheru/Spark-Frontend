import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ModalService } from '../../../../../services/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from '../../../../../services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {


  private _modalService :ModalService;
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();

  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();


  edit_user_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_item : any;

  roles : any = [];
  roles_loading = true;
  pass: String;



  constructor(private _formService : FormItemService) {
    this.edit_user_form = new FormGroup({
      role : new FormControl('',Validators.required),
      first_name : new FormControl('',Validators.required),
      last_name : new FormControl('',Validators.required),
      date_of_birth : new FormControl('',Validators.required),
      huduma_number : new FormControl(''),
      id_number : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      kra_pin : new FormControl('',Validators.required),
      phone : new FormControl('',Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
    this.loadFields();
  }


  ngOnChanges(changes: SimpleChange) {
    this.setValues();
    console.log("setting")
  }


  cancel(){
    this.closeAction.emit(true);
  }

  setValues(){

    if(this.current_item != undefined){
      this.edit_user_form.get('role')?.setValue(this.current_item.role);
      this.edit_user_form.get('first_name')?.setValue(this.current_item.first_name);
      this.edit_user_form.get('last_name')?.setValue(this.current_item.last_name);
      this.edit_user_form.get('id_number')?.setValue(this.current_item.id_number);
      this.edit_user_form.get('huduma_number')?.setValue(this.current_item.huduma_number);
      this.edit_user_form.get('date_of_birth')?.setValue(moment(this.current_item.date_of_birth).format('YYYY-MM-DD'));
      this.edit_user_form.get('email')?.setValue(this.current_item.email);
      this.edit_user_form.get('kra_pin')?.setValue(this.current_item.kra_pin);
      this.edit_user_form.get('phone')?.setValue(this.current_item.phone);
      this.edit_user_form.get('password')?.setValue(this.current_item.password);
    }
  }


  submitForm(){
    this.pass = this.edit_user_form.get('id_number')?.value;
    this.edit_user_form.get('password')?.setValue(this.pass)

    this.edit_user_form.markAllAsTouched();
    if(this.edit_user_form.invalid){
      console.log(this.edit_user_form.hasError)

      return;
    }

    let data = {
      url: `users/me/`,
      formData: this.edit_user_form.getRawValue(),
    };





    this._formService.postForm(false, data).subscribe(
      response => {
        this.cancel();
        this.tableAction.emit();
      },
      (err: HttpErrorResponse) => {
        this.api_errors = err.error;
      }
    );
  }

  loadFields() {
    //get customers
    this._formService.getDropdownValues(`users/get-user-roles`).subscribe(
      response => {
        this.roles_loading = false;
        this.roles = response.results;

      },
      err => {
        this.roles_loading = false;
      }
    );


  }
}
