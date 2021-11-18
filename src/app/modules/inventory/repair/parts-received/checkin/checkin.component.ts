import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';



@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

      
  @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  move_box_form : FormGroup;

  api_errors : any = [];
  
  @Input()
  current_store : any;

  spare_types : any[] = [];
  spare_types_loading = true;
  type: any = '';
  supplier_id: any = '';

  constructor(private _formService : FormItemService,private _toastService :ToastNotificationsService) { }

  ngOnInit(): void {
    const now = new Date();
    this.move_box_form = new FormGroup({
      part_code : new FormControl('',Validators.required),
      supplier: new FormControl('',Validators.required),
      date_of_receipt : new FormControl(now,Validators.required),
      part_description: new FormControl('',Validators.required),
      number_received_warranty : new FormControl('',Validators.required),
      number_received_non_warranty: new FormControl('', Validators.required),
      number_received_total: new FormControl(''),
      comment: new FormControl('', Validators.required)
    });

    

    this.move_box_form.get('number_received_warranty')?.valueChanges.subscribe(data => {
     
      if(this.move_box_form.get('number_received_non_warranty')?.value === ''){
        this.move_box_form.get('number_received_total')?.setValue(data)
      }else{
       
       let w = data
       let n = this.move_box_form.get('number_received_non_warranty')?.value
       let total = parseInt(n) + parseInt(w)
       this.move_box_form.get('number_received_total')?.setValue(total)
      }
    });

    this.move_box_form.get('number_received_non_warranty')?.valueChanges.subscribe(data => {
   
      if(this.move_box_form.get('number_received_warranty')?.value === ''){
        this.move_box_form.get('number_received_total')?.setValue(data)
      }else{
       
       let w = data
       let n = this.move_box_form.get('number_received_warranty')?.value
       let total = parseInt(n) + parseInt(w)
       this.move_box_form.get('number_received_total')?.setValue(total)
      }
    })

        //get stores
    this._formService.getDropdownValues(`spareparts/types`).subscribe(
          response => {
            this.spare_types_loading = false;
            this.spare_types = response.results;
            console.log(this.spare_types)
          },
          err => {
            this.spare_types_loading = false;
          }
      );


  }

  changeType(){

    this.spare_types.forEach((spare_type)=>{
      if(spare_type['id'] === this.move_box_form.get('part_code')?.value){
        this.type = spare_type['id'];
        this.supplier_id = spare_type['supplier'];
        this.move_box_form.get('supplier')?.setValue(spare_type['supplier_name']);
        this.move_box_form.get('part_description')?.setValue(spare_type['description']);
      }
    })
  }


  cancel(){
    this.closeAction.emit('close');
  }

 

  submitForm(){
   let payload = {
    "part_code": this.move_box_form.get('number_received_warranty')?.value,
    "type": this.type,
    "supplier": this.supplier_id,
    "part_description": this.move_box_form.get('part_description')?.value,
    "part_comment": this.move_box_form.get('part_description')?.value,
    "number_received_warranty": this.move_box_form.get('number_received_warranty')?.value,
    "number_received_non_warranty": this.move_box_form.get('number_received_non_warranty')?.value,
    "date_of_receipt": this.move_box_form.get('date_of_receipt')?.value,
    "comment":this.move_box_form.get('comment')?.value
   }
   if(this.move_box_form.invalid)return;
   

   let data : any = {
    url : 'spareparts/',
    formData : payload
   };
   console.log(data.formData)

  this._formService.postForm(true,data).subscribe(
    response => {
      this.cancel();
      this._toastService.showToast("Checkin SUCCESSFULLY!", "success");
      this.tableAction.emit();
    },
    (err: HttpErrorResponse) => {
      this._toastService.showToast("An Error Ocurred", "danger");
    }
    );

  }


}
