import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormItemService } from 'src/app/services/forms/form-item.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  api_errors:any = [];
  check_in_form : FormGroup;;

  box_configs : any[] = [];
  config_loading :boolean = true;

  stores : any[] = [];
  store_loading : boolean = false;

  suppliers : any[] = [];
  
  supplier_loading = true;
  pay_go_providers : any[] = [];

  pay_go_loading : boolean = false;

  //options
  serialized : boolean = false;
  has_pay_go: boolean = false;
  

  constructor(private _formService : FormItemService,private _router : Router) { 
    
    this.check_in_form = new FormGroup({
      box_config:new FormControl('', Validators.required),
      store: new FormControl('', Validators.required),
      supplier : new FormControl('', Validators.required),
      purchase_order: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      date : new FormControl('',Validators.required,),
      pay_go_provider : new FormControl(''),
      serial_numbers: new FormControl(''),
      pay_go_ids: new FormControl(''),
      number_of_boxes : new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.loadFields();
    this.toggleHasPaygo();
    this.toggleSerialzed();
  }

  onSumbit(){
    
    this.check_in_form.markAllAsTouched();
    if(this.check_in_form.invalid)return;
    
    this.api_errors = [];

    //get paygo and and serial numbers
    let serial_numbers =  this.check_in_form.controls['serial_numbers'].value.split("\n");
    let pay_go_ids = this.check_in_form.controls['pay_go_ids'].value.split("\n");
    
    //check if the number of paygo ids matches searial numbers
    //only if has pay go and serial numbers
    if( (this.has_pay_go && this.serialized) && (serial_numbers.length != pay_go_ids.length)){
      this.api_errors['serial_numbers'] = "Serial numbers and paygo ids do not match";
      this.api_errors['pay_go_ids'] = "Serial numbers and paygo ids do not match";
      return;
    }

    if(pay_go_ids.length == 0) pay_go_ids = ""
    else pay_go_ids = this.commaSeparated(pay_go_ids)


    if(serial_numbers.length == 0) serial_numbers = ""
    else serial_numbers = this.commaSeparated(serial_numbers)

    //set paygo and and serial numbers
    this.check_in_form.controls['serial_numbers'].setValue(serial_numbers);
    this.check_in_form.controls['pay_go_ids'].setValue(pay_go_ids);

    console.log(this.check_in_form.value);
    let data = {
      url: `boxs/bulk/`,
      formData: this.check_in_form.value,
    };

    this._formService.postForm(true, data).subscribe(
      response => {
        this._router.navigate(['/inventory/list']);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.api_errors = err.error;
      }
    );
  }

  commaSeparated( ray : any[]): any {
    let str = "";
    for(let s of ray){
      str += `${s},`; 
    }
    str = str.slice(0, -1);
    return str;
  }

  toggleSerialzed(){
    if(this.serialized){
      this.check_in_form.get('serial_numbers')?.enable();
      this.check_in_form.get('number_of_boxes')?.disable();
    }else{
      this.check_in_form.get('serial_numbers')?.disable();
      if(!this.has_pay_go){
        this.check_in_form.get('number_of_boxes')?.enable();
      }else{
        this.check_in_form.get('number_of_boxes')?.disable();
      }
    }
  }

  toggleHasPaygo(){
    
    if(this.has_pay_go){
      this.check_in_form.get('pay_go_ids')?.enable();
      this.check_in_form.get('pay_go_provider')?.enable();
      this.check_in_form.get('number_of_boxes')?.disable();
    }else{
      this.check_in_form.get('pay_go_ids')?.disable();
      this.check_in_form.get('pay_go_provider')?.disable();
      if(!this.serialized){
        this.check_in_form.get('number_of_boxes')?.enable();
      }else{
        this.check_in_form.get('number_of_boxes')?.disable();
      }
    }
  }

  

  loadFields() {
    //get stores
    this._formService.getDropdownValues(`stores?type=WH`).subscribe(
      response => {
        this.store_loading = false;
        this.stores = response.results;
      },
      err => {
        this.store_loading = false;
      }
    );

    //get suppliers
    this._formService.getDropdownValues(`suppliers`).subscribe(
      response => {
        this.supplier_loading = false;
        this.suppliers = response.results;
      },
      err => {
        this.supplier_loading = false;
      }
    );

    this._formService.getDropdownValues(`box-configs`).subscribe(
      response => {
        this.config_loading = false;
        this.box_configs = response.results;
      },
      err => {
        this.config_loading = false;
      }
    );

    this._formService.getDropdownValues(`pay-go-providers`).subscribe(
      response => {
        this.pay_go_loading = false;
        this.pay_go_providers = response.results;
      },
      err => {
        this.pay_go_loading = false;
      }
    );

  }

  cancel() : void{
    alert("OMOM")
  }


}
