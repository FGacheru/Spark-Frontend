import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from '../../../../services/forms/form-item.service';
import { ToastNotificationsService } from '../../../../shared/toast-notifications/toast-notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-repair',
  templateUrl: './update-repair.component.html',
  styleUrls: ['./update-repair.component.scss']
})
export class UpdateRepairComponent implements OnInit {

  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();

  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();


  ticket_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_store : any;
  customers : any[]= [];
  customers_loading = true;
  users : any[] = [];
  users_loading = true;
  jobs_done: any[] = [
    'Update Firmware'
  ]

  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) {
    this.ticket_form = new FormGroup({
      customer: new FormControl('',Validators.required),
      jobs_done: new FormControl('', Validators.required),
      reception_date: new FormControl('', Validators.required),
      return_date : new FormControl('',Validators.required),
      problem_description: new FormControl('',Validators.required),
      technician : new FormControl('',Validators.required),
      site_visit_date : new FormControl('',Validators.required),
      repair_charge : new FormControl(''),
      amount_paid : new FormControl('')
    });
    this.ticket_form.get('repair_charge')?.disable();
    this.ticket_form.get('amount_paid')?.disable();
  }

  ngOnInit(): void {
    this.loadFields();
  }

  cancel(){
    this.closeAction.emit('close');
  }

  submitForm(){

    if(this.ticket_form.invalid){
      console.log(this.ticket_form.errors);
    }

    console.log(this.ticket_form.value);
    let data : any = {
      url : 'technical-support/',
      formData : this.ticket_form.value
    };

    this._formService.postForm(true,data).subscribe(
      response => {
        this.cancel();
        this._toastService.showToast("TICKET CREATED SUCCESSFULLY!", "success");
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

    // get item types
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
