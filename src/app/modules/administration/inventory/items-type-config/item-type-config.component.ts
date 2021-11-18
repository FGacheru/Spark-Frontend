import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';

@Component({
  selector: 'app-items',
  templateUrl: './item-type-config.component.html',
  styleUrls: ['./item-type-config.component.scss']
})
export class ItemsTypeConfigComponent implements OnInit {

    url : string ='item-type-configs/'
    
    titles : object[] = [
      {
        title : 'DB ID',
        field : 'id'
      },
      {
        title : 'NAME',
        field : 'name'
      },
      {
        title : 'Description',
        field : 'description'
      }
    ]

    @ViewChild(BasicTableComponent)
    table : BasicTableComponent;

    api_errors:any = [];
    add_item_config_form : FormGroup;
    loading = true;


    constructor(
      private _modalService : ModalService,
      private _formService : FormItemService,
      private _toastService : ToastNotificationsService
    ){ }

    ngOnInit(): void {
      this.add_item_config_form = new FormGroup({
        name : new FormControl('',Validators.required),
        description : new FormControl('',Validators.required),
        type : new FormControl('item-config',Validators.required)
      });

    }

    openEdit(){
      this._modalService.open('add-item-type-config');
    }

    ngOnDestroy(): void{
      this._modalService.remove('add-item-type-config');
    }

    onSubmitAdd(){
      //validate
      this.add_item_config_form.markAllAsTouched();
      if(this.add_item_config_form.invalid)return;

      this.loading = true;

      //submit
      let data = {
        url: `item-type-configs/`,
        formData: this.add_item_config_form.value,
      };

     
      this._formService.postForm(true, data).subscribe(
        response => {
          this.loading = false;
           this.add_item_config_form.reset();
           this.cancel();
           this.table.getTableData();
        },
        (err: HttpErrorResponse) => {
          this.loading = false;
          this._toastService.showToast("An Error Ocurred", "danger");
        
          this.api_errors = err.error;
        }
      );

    }

    cancel():void{
      this._modalService.close('add-item-type-config');
    }

}



