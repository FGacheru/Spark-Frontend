import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ModalService } from '../../../../services/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from '../../../../services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dispatch-items',
  templateUrl: './dispatch-items.component.html',
  styleUrls: ['./dispatch-items.component.scss']
})
export class DispatchItemsComponent implements OnInit {

  private _modalService :ModalService;
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();

  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  dispatch_items_form : FormGroup;

  api_errors : any = [];

  @Input()
  current_item : any;

  @Input()
  selected_items : any;

  users : any = [];

  couriers = ['COURIER 1','COURIER 2']


  constructor(private _formService : FormItemService) {
    this.dispatch_items_form = new FormGroup({

      date : new FormControl('',Validators.required),
      courier : new FormControl('',Validators.required),
      waybill_no : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required)
    });



  }

  ngOnInit(): void {
  }



  ngOnChanges(changes: SimpleChange) {
    this.setValues();
  }

  setValues(){

  }

  cancel(){
    this.closeAction.emit(true);
  }


  submit(){
    this.dispatch_items_form.markAllAsTouched();
    if(this.dispatch_items_form.invalid)return;

    let payload = {
      items: this.selected_items,
      dispatch_date : this.dispatch_items_form.get('date')?.value,
      courier :this.dispatch_items_form.get('courier')?.value,
      waybill_no : this.dispatch_items_form.get('waybill_no')?.value,
      dispatch_description : this.dispatch_items_form.get('description')?.value,
    }
    let data = {
      url: `operations/dispatch_items/`,
      formData: payload
    };

    console.log(data)

     this._formService.postForm(true, data).subscribe(
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
