
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';



@Component({
  selector: 'app-wth',
  templateUrl: './wth.component.html',
  styleUrls: ['./wth.component.scss']
})
export class WthComponent implements OnInit {

  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();


  withhold_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_item : any;
  customers : any[]= [];
  customers_loading = true;
  users : any[] = [];
  users_loading = true;

  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) { 
    this.withhold_form = new FormGroup({
      // wth_type: new  FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required),
  
    });

  }

  ngOnInit(): void {
 
  }

  cancel(){
    this.closeAction.emit('close');
  }

  submitForm(){
  
    if(this.withhold_form.invalid){
      console.log(this.withhold_form.errors);
      return;
    }

    let tax = 0;
    let withhold = 0;

    let d = {
      "account":this.current_item.id,
      "wth_type":'',
      "description":this.withhold_form.get('description')?.value,
      "tax":tax,
      "withhold":this.withhold_form.get('amount')?.value
    }
    
    console.log(this.withhold_form.value);
    let data : any = {
     url : 'fieldforce/withhold/',
     formData : d
    };
  
   this._formService.postForm(true,data).subscribe(
     response => {
       this.cancel();
       this._toastService.showToast("WITHHELD SUCCESSFULLY!", "success");
       this.tableAction.emit();
     },
     (err: HttpErrorResponse) => {
       this._toastService.showToast("An Error Ocurred", "danger");
     }
     );
  }


}
