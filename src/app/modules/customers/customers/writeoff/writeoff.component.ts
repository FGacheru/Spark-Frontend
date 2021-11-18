
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';


@Component({
  selector: 'app-writeoff',
  templateUrl: './writeoff.component.html',
  styleUrls: ['./writeoff.component.scss']
})
export class WriteoffComponent implements OnInit {

 
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();


  write_off_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_store : any;


  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) { 
    this.write_off_form = new FormGroup({
      customer : new FormControl('',Validators.required),
      date : new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      item : new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
  }

  cancel(){
    this.closeAction.emit('close');
  }

  submitForm(){
    this.write_off_form.get('customer')?.setValue(this.current_store.id);
    if(this.write_off_form.invalid)return;
    
 
    let data : any = {
     url : 'customers/writeoff',
     formData : this.write_off_form.value
    };
  
   this._formService.postForm(true,data).subscribe(
     response => {
       this.cancel();
       this._toastService.showToast("WRITTEN OFF SUCCESSFULLY!", "success");
       this.tableAction.emit();
     },
     (err: HttpErrorResponse) => {
       this._toastService.showToast("An Error Ocurred", "danger");
     }
     );
 
}

}
