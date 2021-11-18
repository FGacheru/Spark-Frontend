import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { ToastNotificationsComponent } from 'src/app/shared/toast-notifications/toast-notifications.component';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';

@Component({
  selector: 'app-item-config',
  templateUrl: './item-config.component.html',
  styleUrls: ['./item-config.component.scss']
})
export class ItemConfigComponent implements OnInit {

  url : string ='item-configs/'

  add_item_config_form : FormGroup; 
  api_errors : any = []; 
  
  titles : object[] = [
    {
      title : 'DB ID',
      field : 'id'
    },
    {
      title : 'Name',
      field : 'name'
    },
    {
      title : 'TYPE',
      field : 'type_name'
    },
    {
      title : 'Description',
      field : 'description'
    }
  ]

  item_type_config : any = {
    "type": "field",
    "required": true,
    "read_only": false,
    "label": "Items Type",
    "display_name": "name",
    "value_field": "id",
    "multiple": false,
    "url": `item-type-configs/`,
    "search_field": "name",
    "args": "users",
    "edit_source_field": "items_details",
    "edit_display_name": "item_name",
    "res_value_field": "item_type",
    "isMap" : false,
    "count" : false
  }

  @ViewChild(BasicTableComponent)
  table : BasicTableComponent

  constructor(private _modalService : ModalService,
    private _formService : FormItemService,private _toastService : ToastNotificationsService) {
    
    this.add_item_config_form = new FormGroup({
      name : new  FormControl('',Validators.required),
      description : new FormControl('',Validators.required),
      type : new FormControl(''),
      type_tmp : new FormControl('',Validators.required)
    });

   }

  ngOnInit(): void {
  }
  
  openEdit(){
    this._modalService.open('add-item-config');
  }

  ngOnDestroy(): void{
    this._modalService.remove('add-item-config');
  }

  cancel():void{
    this._modalService.close('add-item-config');
  }

  onSubmitAdd(){
    console.log()
    this.add_item_config_form.markAllAsTouched()
    if(this.add_item_config_form.invalid)return;
    
    this.add_item_config_form.get('type')?.setValue(this.add_item_config_form.get('type_tmp')?.value[0].id)

    let data = {
      url: this.url,
      formData: this.add_item_config_form.value,
    };

   
    this._formService.postForm(true, data).subscribe(
      response => {
      
         this.add_item_config_form.reset();
         this.cancel();
         this.table.getTableData();
      },
      (err: HttpErrorResponse) => {
  
        this._toastService.showToast("An Error Ocurred", "danger");
        this.api_errors = err.error;
      }
    );

  }
}
