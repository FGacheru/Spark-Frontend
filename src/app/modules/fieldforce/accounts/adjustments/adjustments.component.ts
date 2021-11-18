import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';



@Component({
  selector: 'app-adjustments',
  templateUrl: './adjustments.component.html',
  styleUrls: ['./adjustments.component.scss']
})
export class AdjustmentsComponent implements OnInit {

  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();


  adjustment_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_item : any;
  adjustments : any[]= ['earning','payment'];
  customers_loading = true;
  users : any[] = [];
  users_loading = true;

  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) { 
    this.adjustment_form = new FormGroup({
      adjustment_type: new FormControl('',Validators.required),
      amount: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
  }

  cancel(){
    this.closeAction.emit('close');
  }

  submitForm(){
  
    if(this.adjustment_form.invalid){
      console.log(this.adjustment_form.errors);
      return;
    }
    console.log(this.current_item)
    let adj_earning = 0;
    let adj_payment = 0;
    if(this.adjustment_form.get('adjustment_type')?.value === 'earning'){
      adj_earning = parseInt(this.adjustment_form.get('amount')?.value)
    }else if(this.adjustment_form.get('adjustment_type')?.value === 'payment'){
      adj_payment = parseInt(this.adjustment_form.get('amount')?.value)
    }

    let d = {
      "account":this.current_item.id,
      "type":this.adjustment_form.get('adjustment_type')?.value,
      "description":this.adjustment_form.get('description')?.value,
      "adj_earning":adj_earning,
      "adj_payment":adj_payment
    }

   console.log(d)
    let data : any = {
     url : 'fieldforce/adjustment/',
     formData : d
    };
  
   this._formService.postForm(true,data).subscribe(
     response => {
       this.cancel();
       this._toastService.showToast("ADJUSTMENT MADE!", "success");
       this.tableAction.emit();
     },
     (err: HttpErrorResponse) => {
       this._toastService.showToast("An Error Ocurred", "danger");
     }
     );
  }

}
