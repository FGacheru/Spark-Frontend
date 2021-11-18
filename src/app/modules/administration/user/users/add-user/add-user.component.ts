import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  private _modalService :ModalService;
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  add_user_form : FormGroup;

  api_errors : any = [];
  
  @Input()
  current_item : any;

  roles : any = [];
  roles_loading = true;
  pass: String;



  constructor(private _formService : FormItemService) { 
    this.add_user_form = new FormGroup({
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
  }

  setValues(){
   
  }
  
  cancel(){
    this.closeAction.emit(true);
  }


  submitForm(){
    this.pass = this.add_user_form.get('id_number')?.value;
    this.add_user_form.get('password')?.setValue(this.pass)

    this.add_user_form.markAllAsTouched();
    if(this.add_user_form.invalid){
      console.log(this.add_user_form.hasError)
      
      return;
    };

    let data = {
      url: `users/`,
      formData: this.add_user_form.getRawValue(),
    };

    console.log(data)
    


    this._formService.postForm(true, data).subscribe(
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
        console.log("**************")
        console.log(this.roles)
      },
      err => {
        this.roles_loading = false;
      }
    );


  }

}
