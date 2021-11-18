
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';


@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit {

  
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();


  referral_form : FormGroup;

  api_errors : any = [];

  types : any[]  =  [
    {
      name : 'Cash',
      value :'CASH'
    },
    {
     name : 'Credit',
     value :'CREDIT'
    }
  ];


  @Input()
  current_store : any;
  customers : any[]= [];
  customers_loading = true;
  users : any[] = [];
  users_loading = true;

  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) { 
    this.referral_form = new FormGroup({
      referrer_name: new FormControl('',Validators.required),
      prospect_name: new FormControl('',Validators.required),
      prospect_phone_no: new FormControl('',Validators.required),
      bonus_type: new FormControl('',Validators.required),
      amount: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
    this.loadFields();
  }

  cancel(){
    this.closeAction.emit('close');
  }

  submitForm(){
  
    if(this.referral_form.invalid){
      console.log(this.referral_form.errors);
    }
    
    console.log(this.referral_form.value);
    let data : any = {
     url : 'customer-referral/',
     formData : this.referral_form.value
    };
  
   this._formService.postForm(true,data).subscribe(
     response => {
       this.cancel();
       this._toastService.showToast("REFERRAL CREATED SUCCESSFULLY!", "success");
       this.tableAction.emit();
     },
     (err: HttpErrorResponse) => {
       this._toastService.showToast("An Error Ocurred", "danger");
     }
     );
  }

  loadFields() {
    //get customers
    this._formService.getDropdownValues(`customers`).subscribe(
      response => {
        this.customers_loading = false;
        this.customers = response.results;
      },
      err => {
        this.customers_loading = false;
      }
    );

  }
}
