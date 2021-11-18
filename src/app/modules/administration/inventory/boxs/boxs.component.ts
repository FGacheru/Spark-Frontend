import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';

@Component({
  selector: 'app-boxs',
  templateUrl: './boxs.component.html',
  styleUrls: ['./boxs.component.scss']
})
export class BoxsComponent implements OnInit {
  url : string ='box-configs/'

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
      title : 'Description',
      field : 'description'
    },
    {
      title : 'Item Count',
      field: 'items_details.length',
      calculated : true
    }
  ]

  add_box_config_form : FormGroup;
  api_errors : any = [];

  @ViewChild(BasicTableComponent)
  table : BasicTableComponent;

  constructor(
    private _modalService : ModalService,
    private _formService : FormItemService,private _toastService : ToastNotificationsService){
    this.add_box_config_form = new FormGroup({
      name : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required),
      items: new  FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
          //validate
          this.add_box_config_form.markAllAsTouched();
          if(this.add_box_config_form.invalid)return;


          //submit
          let data = {
            url: `${this.url}`,
            formData: this.add_box_config_form.value,
          };

          this._formService.postForm(true, data).subscribe(
            response => {
               this.add_box_config_form.reset();
               this.cancel();
               this.table.getTableData();
            },
            (err: HttpErrorResponse) => {
              this._toastService.showToast("An Error Ocurred", "danger");

              this.api_errors = err.error;
            }
          );

  }

  //modal

  openAdd(){
    this._modalService.open('add-box-config')
  }

  ngOnDestroy(): void{
    this._modalService.remove('add-box-config');
  }

  cancel():void{
    this._modalService.close('add-box-config');
  }


}
