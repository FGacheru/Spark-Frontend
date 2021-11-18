
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';


@Component({
  selector: 'app-repossess',
  templateUrl: './repossess.component.html',
  styleUrls: ['./repossess.component.scss']
})
export class RepossessComponent implements OnInit {

  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();


  repossess_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_store : any;
  users : any[]= [];
  users_loading = true;


  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) { 
    this.repossess_form = new FormGroup({
      customer: new FormControl('',Validators.required),
      name: new FormControl('', Validators.required),
      items: new FormControl('', Validators.required),
      condition : new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      date : new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
    this.loadFields();
  }

  cancel(){
    this.closeAction.emit('close');
  }

  submitForm(){
    this.repossess_form.get('customer')?.setValue(this.current_store.id);
    if(this.repossess_form.invalid){
      console.log(this.repossess_form.errors);
    }
    
    console.log(this.repossess_form.value);
    let data : any = {
     url : 'customers/repossession',
     formData : this.repossess_form.value
    };
  
   this._formService.postForm(true,data).subscribe(
     response => {
       this.cancel();
       this._toastService.showToast("REPOSSESSED SUCCESSFULLY!", "success");
       this.tableAction.emit();
     },
     (err: HttpErrorResponse) => {
       this._toastService.showToast("An Error Ocurred", "danger");
     }
     );
  }

  loadFields() {
    //get stores
    this._formService.getDropdownValues(`users`).subscribe(
      response => {
        this.users_loading = false;
        this.users = response.results;
      },
      err => {
        this.users_loading = false;
      }
    );

  }
}
