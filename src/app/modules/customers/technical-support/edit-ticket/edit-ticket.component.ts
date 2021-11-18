
import { Component, EventEmitter, Input, OnInit, Output,SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {

  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();


  ticket_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_item : any;
  customers : any[]= [];
  customers_loading = true;
  users : any[] = [];
  users_loading = true;

  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) { 
    this.ticket_form = new FormGroup({
      // customer: new FormControl('',Validators.required),
      ticket_number: new FormControl('', Validators.required),
      reception_date: new FormControl('', Validators.required),
      return_date : new FormControl('',Validators.required),
      problem_description: new FormControl('',Validators.required),
      technician : new FormControl('',Validators.required),
      site_visit_date : new FormControl('',Validators.required),
      repair_charge : new FormControl('', Validators.required),
      amount_paid : new FormControl('', Validators.required),
      work_done: new FormControl('', Validators.required),
      repair_feedback: new FormControl('', Validators.required)
    });
    this.ticket_form.get('ticket_number')?.disable();
    this.ticket_form.get('reception_date')?.disable();
    this.ticket_form.get('technician')?.disable();
  }

  ngOnInit(): void {
    this.loadFields();
  }

  ngOnChanges(changes: SimpleChange) {
     this.setValues();    
  }

  setValues(){
    if(this.current_item != undefined){
      this.ticket_form.get('customer')?.setValue(this.current_item.customer);
      this.ticket_form.get('ticket_number')?.setValue(this.current_item.ticket_number);
      this.ticket_form.get('technician')?.setValue(this.current_item.technician);
      this.ticket_form.get('reception_date')?.setValue(moment(this.current_item.reception_date).format('YYYY-MM-DD'));
      this.ticket_form.get('problem_description')?.setValue(this.current_item.problem_description);
      this.ticket_form.get('work_done')?.setValue(this.current_item.work_done);
      this.ticket_form.get('repair_feedback')?.setValue(this.current_item.repair_feedback);
      this.ticket_form.get('site_visit_date')?.setValue(moment(this.current_item.site_visit_date).format('YYYY-MM-DD'));
    }
  }

  cancel(){
    this.closeAction.emit('close');
  }

  submitForm(){
    this.ticket_form.markAllAsTouched();
    if(this.ticket_form.invalid)return;

    let data = {
      url: `technical-support/${this.current_item.id}/`,
      formData: this.ticket_form.getRawValue(),
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
