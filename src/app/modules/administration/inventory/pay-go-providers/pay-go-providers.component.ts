import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';

@Component({
  selector: 'app-pay-go-providers',
  templateUrl: './pay-go-providers.component.html',
  styleUrls: ['./pay-go-providers.component.scss']
})
export class PayGoProvidersComponent implements OnInit {
  
  add_pay_go_form : FormGroup;
  api_errors : any = [];

  url: string = 'pay-go-providers/'
  
  titles : any[] = [
    {
      title : 'Name',
      field : 'name'
    },
    {
      title : 'Description',
      field : 'description'
    }
  ];
   
  @ViewChild(BasicTableComponent)
  table : BasicTableComponent;

  constructor(private  _formService : FormItemService, 
   private  _toastService : ToastNotificationsService,
   private _modalService : ModalService
   ) {
    this.add_pay_go_form = new FormGroup({
      name : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required),
    });
   }

  ngOnInit(): void {
  }

  onSubmitAdd(){
       //validate
       this.add_pay_go_form.markAllAsTouched();
       if(this.add_pay_go_form.invalid)return;
 
 
       //submit
       let data = {
         url: this.url,
         formData: this.add_pay_go_form.value,
       };
 
      
       this._formService.postForm(true, data).subscribe(
         response => {
            this.add_pay_go_form.reset();
            this.cancel();
            this.table.getTableData();
         },
         (err: HttpErrorResponse) => {

           this._toastService.showToast("An Error Ocurred", "danger");
         
           this.api_errors = err.error;
         }
       );
  }

  openAdd(){
    this._modalService.open('add-pay-go');
  }

  cancel(){
    this._modalService.close('add-pay-go');
  }

}
