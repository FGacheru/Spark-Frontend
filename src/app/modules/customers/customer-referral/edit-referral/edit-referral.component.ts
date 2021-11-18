 
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { FormItemService } from 'src/app/services/forms/form-item.service';

@Component({
  selector: 'app-edit-referral',
  templateUrl: './edit-referral.component.html',
  styleUrls: ['./edit-referral.component.scss']
})
export class EditReferralComponent implements OnInit {

   
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  referral_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_item : any;

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
  
  

  customers : any[]= [];
  customers_loading = true;
  users : any[] = [];
  users_loading = true;

  suppliers : any = [];
  stores : any = [];
  ownerships :any[] = [
    'N', 'U'
  ];

  inventory_statues:any[] = [
    'S','A','R','D','W'
  ];

  constructor(private _formService : FormItemService) { 
    this.referral_form = new FormGroup({
      
      // referrer_name: new FormControl('',Validators.required),
      prospect_name: new FormControl('',Validators.required),
      prospect_phone_no: new FormControl('',Validators.required),
      bonus_type: new FormControl('',Validators.required),
      amount: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
    });

    this.referral_form.get('referrer_name')?.disable();

    //get suppliers
    this._formService.getDropdownValues(`suppliers`).subscribe(
      response => {
        this.suppliers = response.results;
      },
    );
    
    this._formService.getDropdownValues(`stores?type=WH`).subscribe(
      response => {
        this.stores = response.results;
      },
      err => {

      }
    );
    

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(this.current_item)
     this.setValues();    
  }

  setValues(){
    console.log(this.current_item);
    if(this.current_item != undefined){
      this.referral_form.get('referrer_name')?.setValue(this.current_item.referrer_name);
      this.referral_form.get('prospect_name')?.setValue(this.current_item.prospect_name);
      this.referral_form.get('bonus_type')?.setValue(this.current_item.bonus_type);
      this.referral_form.get('prospect_phone_no')?.setValue(this.current_item.prospect_phone_no);
      this.referral_form.get('amount')?.setValue(this.current_item.amount);
      this.referral_form.get('date')?.setValue(moment(this.current_item.date).format('YYYY-MM-DD'));
    }
  }
  
  cancel(){
    this.closeAction.emit(true);
  }


  submitForm(){
    this.referral_form.markAllAsTouched();
    if(this.referral_form.invalid)return;

    let data = {
      url: `customer-referral/${this.current_item.id}/`,
      formData: this.referral_form.getRawValue(),
    };
    console.log(data)

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

}
