import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  private _modalService :ModalService;
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  add_customer_form : FormGroup;

  api_errors : any = [];
  
  @Input()
  current_item : any;

  users : any = [];




  constructor(private _formService : FormItemService) { 
    this.add_customer_form = new FormGroup({
      
      name : new FormControl('',Validators.required),
      id_number : new FormControl('',Validators.required),
      registration_date : new FormControl('',Validators.required),
      primary_phone : new FormControl('',Validators.required),
      region : new FormControl('',Validators.required),
      village : new FormControl('',Validators.required),
      paygo_id : new FormControl('',Validators.required),
      contract_number : new FormControl('',Validators.required),
      min_salary : new FormControl('',Validators.required),
      max_salary : new FormControl('',Validators.required),
      occupation : new FormControl('',Validators.required)
    });

  
    
    this._formService.getDropdownValues(`users`).subscribe(
      response => {
        this.users = response.results;
      },
      err => {

      }
    );
    

  }

  ngOnInit(): void {
  }

 

  ngOnChanges(changes: SimpleChange) {
     this.setValues();    
  }

  setValues(){
   
  }
  
  cancel(){
    this.closeAction.emit(true);
  }


  submit(){
    this.add_customer_form.markAllAsTouched();
    if(this.add_customer_form.invalid)return;

    let data = {
      url: `customers/`,
      formData: this.add_customer_form.getRawValue(),
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
}
