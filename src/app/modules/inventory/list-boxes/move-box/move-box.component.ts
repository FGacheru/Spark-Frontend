import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';


@Component({
  selector: 'app-move-box',
  templateUrl: './move-box.component.html',
  styleUrls: ['./move-box.component.scss']
})
export class MoveBoxComponent implements OnInit {

     
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  move_box_form : FormGroup;

  api_errors : any = [];
  
  @Input()
  current_store : any;

  stores : any[] = [];
  store_loading = true;


  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) { }

  ngOnInit(): void {

    this.move_box_form = new FormGroup({
      id : new FormControl('',Validators.required),
      to_store: new FormControl('',Validators.required),
      from_store : new FormControl('',Validators.required),
      //serial_numbers: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      date : new FormControl('',Validators.required)
    });

        //get stores
    this._formService.getDropdownValues(`stores`).subscribe(
          response => {
            this.store_loading = false;
            this.stores = response.results;
          },
          err => {
            this.store_loading = false;
          }
      );
  }

  cancel(){
    this.closeAction.emit('close');
  }

  submitForm(){
   this.move_box_form.get('id')?.setValue(this.current_store.id);
   this.move_box_form.get('from_store')?.setValue(this.current_store.store.id);
   this.move_box_form.markAllAsTouched();
   if(this.move_box_form.invalid)return;
   

   let data : any = {
    url : 'boxs/move/',
    formData : this.move_box_form.value
   };
 
  this._formService.postForm(true,data).subscribe(
    response => {
      this.cancel();
      this._toastService.showToast("MOVED SUCCESSFULLY!", "success");
      this.tableAction.emit();
    },
    (err: HttpErrorResponse) => {
      this._toastService.showToast("An Error Ocurred", "danger");
    }
    );

  }

}
