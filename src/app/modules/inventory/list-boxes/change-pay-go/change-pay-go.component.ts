import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';

@Component({
  selector: 'app-change-pay-go',
  templateUrl: './change-pay-go.component.html',
  styleUrls: ['./change-pay-go.component.scss']
})
export class ChangePayGoComponent implements OnInit {
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();

  @Output()
  tableAction : EventEmitter<any> = new EventEmitter();

  change_paygo_form : FormGroup;

  api_errors : any = [];
  
  @Input()
  current_store : any;


  constructor(private _formService : FormItemService,private _toastService : ToastNotificationsService) { 
    this.change_paygo_form = new FormGroup({
      id : new FormControl('',Validators.required),
      paygo_id : new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      date : new FormControl('',Validators.required)
    });

  
  }

  ngOnInit(): void {

  }

 submitForm(){

   
    this.change_paygo_form.controls['id'].setValue(this.current_store.id);
    
    this.change_paygo_form.markAllAsTouched()
    if(this.change_paygo_form.invalid){
      return;
    }

    let data : any = {
       url : 'boxs/replace_paygo_id/',
       formData : this.change_paygo_form.value
    };
    
    this._formService.postForm(true,data).subscribe(
      response => {
        this.cancel();
        this._toastService.showToast("PAYGO ID CHANGED SUCCESSFULLY!", "success");
        this.tableAction.emit();
      },
      (err: HttpErrorResponse) => {
        this._toastService.showToast("An Error Ocurred", "danger");
      }
     );
  }

  cancel(){
    this.closeAction.emit();
  }

}
