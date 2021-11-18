import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormItemService } from 'src/app/services/forms/form-item.service';

@Component({
  selector: 'app-add-price-group',
  templateUrl: './add-price-group.component.html',
  styleUrls: ['./add-price-group.component.scss']
})
export class AddPriceGroupComponent implements OnInit {


  page_title = 'Add Price Group Configuration'
  newEntry: boolean = true;
  product_config_form: any;
  pay_go_providers: any;


  types : any[]  =  [
    {
      name : 'Installment',
      value :'I'
    },
    {
     name : 'Cash',
     value :'C'
    }
  ];

  pay_go_providers_loading: boolean = true;
  instance: any = {};
  api_errors: any = [];
 

  constructor( private router : Router,
    private _formService: FormItemService,private location: Location){
   
   let data = this.router.getCurrentNavigation()!.extras.state;
   if(data != undefined && data != null){
     this.instance = data.data;
     this.newEntry = false;
   }

   const pay_go_provider = new FormControl(this.newEntry ? '' : this.instance.pay_go_provider, Validators.required);
   const type = new FormControl(this.newEntry ? '' : this.instance.type,Validators.required);
   const name = new FormControl(this.newEntry ? '' : this.instance.name,Validators.required);
   const deposit = new FormControl(this.newEntry ? '0' : (this.instance.deposit ?? 0),Validators.required);
   const daily_rate = new FormControl(this.newEntry ? '0' : (this.instance.daily_rate ?? 0),Validators.required);
   const unlock_price = new FormControl(this.newEntry ? '0' : (this.instance.unlock_price ?? 0),Validators.required);
   const number_of_days = new FormControl(this.newEntry ? '0' : (this.instance.number_of_days ?? 0),Validators.required);
   const days_in_activation_amount = new FormControl(this.newEntry ? '0' : (this.instance.days_in_activation_amount ?? 0),Validators.required);
   const min_activation_amount = new FormControl(this.newEntry ? '0' : (this.instance.min_activation_amount ?? 0),Validators.required);
   const cash_amount = new FormControl(this.newEntry ? '' : this.instance.cash_amount ,Validators.required);
   const description = new FormControl(this.newEntry ? '' : this.instance.description,Validators.required);

   this.product_config_form = new FormGroup({
     name : name,
     description : description,
     type : type,
     deposit :deposit,
     unlock_price : unlock_price,
     daily_rate : daily_rate,
     number_of_days : number_of_days,
     days_in_activation_amount :days_in_activation_amount,
     min_activation_amount:min_activation_amount,
     cash_amount:cash_amount,
     pay_go_provider : pay_go_provider,
   })

  }


 ngOnInit(){
    this.getDropdownValues();
 }

 onSubmit(){
     //reset API errors
   this.api_errors = [];
   let data = {
     url: this.newEntry == true ? `price-group-configs/` :
      `price-group-configs/${this.instance.id}/`,
     formData: this.product_config_form.value
   }
   console.log(data);
   this._formService.postForm(this.newEntry, data).subscribe(response => {
     console.log(response);
     this.product_config_form.reset();
     this.location.back();
   }, (err: HttpErrorResponse) => {

     this.api_errors = err.error;

   })

 }

 getDropdownValues() {
   this._formService.getDropdownValues('pay-go-providers').subscribe( (data) => {
      this.pay_go_providers_loading = false;
      this.pay_go_providers = data.results;
   },err => {
     this.pay_go_providers_loading = false;
   })
 }

 calculate(){
   
   //get min activation
   let minAmount =  this.product_config_form.controls['deposit'].value + (this.product_config_form.controls['days_in_activation_amount'].value * this.product_config_form.controls['daily_rate'].value);
   
   //get unlock price
   let unlockPrice = this.product_config_form.controls['deposit'].value + ( this.product_config_form.controls['number_of_days'].value * this.product_config_form.controls['daily_rate'].value );
   
   //set values
   this.product_config_form.patchValue({
     min_activation_amount: minAmount, 
     unlock_price: unlockPrice
   });


 }

 //Reset Form
 clearForm() {
   this.newEntry = false;
   this.product_config_form.reset();
 }
}
