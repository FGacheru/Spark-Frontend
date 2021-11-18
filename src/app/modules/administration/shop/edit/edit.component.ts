import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from '../../../../services/forms/form-item.service';
import * as moment from 'moment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();

  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  edit_box_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_item : any;

  suppliers : any = [];
  stores : any = [];
  ownerships :any[] = [
    'N', 'U'
  ];

  inventory_statues:any[] = [
    'S','A','R','D','W'
  ];

  constructor(private _formService : FormItemService) {
    this.edit_box_form = new FormGroup({

      purchase_order : new FormControl('',Validators.required),
      serial : new FormControl('',Validators.required),
      ownership_status : new FormControl('',Validators.required),
      inventory_status : new FormControl('',Validators.required),
      paygo_id : new FormControl('',Validators.required),
      checkin_date : new FormControl('',Validators.required),
      checkin_warehouse : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required),
      supplier : new FormControl('',Validators.required),
      capacity : new FormControl('',Validators.required),
      store : new FormControl('',Validators.required)

      //last_move_date : new FormControl('',Validators.required),
      //box_type : new FormControl('',Validators.required),
    });

    this.edit_box_form.get('paygo_id')?.disable();

    //get suppliers
    this._formService.getDropdownValues(`suppliers`).subscribe(
      response => {
        this.suppliers = response.results;
      },
    );

    this._formService.getDropdownValues(`stores?type=WH`).subscribe(
      response => {
        this.stores = response.results;
      },
      err => {

      }
    );


  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange) {
    this.setValues();
  }

  setValues(){
    if(this.current_item != undefined){
      this.edit_box_form.get('purchase_order')?.setValue(this.current_item.purchase_order);
      this.edit_box_form.get('serial')?.setValue(this.current_item.serial);
      this.edit_box_form.get('ownership_status')?.setValue(this.current_item.ownership_status);
      this.edit_box_form.get('inventory_status')?.setValue(this.current_item.inventory_status);
      this.edit_box_form.get('paygo_id')?.setValue(this.current_item.paygo_id);
      this.edit_box_form.get('checkin_date')?.setValue(moment(this.current_item.checkin_date).format('YYYY-MM-DD'));
      this.edit_box_form.get('checkin_warehouse')?.setValue(this.current_item.checkin_warehouse);
      this.edit_box_form.get('supplier')?.setValue(this.current_item.supplier.id);
      this.edit_box_form.get('capacity')?.setValue(this.current_item.capacity);
      this.edit_box_form.get('description')?.setValue(this.current_item.description);
      this.edit_box_form.get('store')?.setValue(this.current_item.store.id);
    }
  }

  cancel(){
    this.closeAction.emit(true);
  }

  submit(){
    this.edit_box_form.markAllAsTouched();
    if(this.edit_box_form.invalid)return;

    let data = {
      url: `boxs/${this.current_item.id}/`,
      formData: this.edit_box_form.getRawValue(),
    };


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



}
