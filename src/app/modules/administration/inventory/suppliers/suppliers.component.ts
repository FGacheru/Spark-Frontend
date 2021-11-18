import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { HttpService } from '../../../../services';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  url : string = "suppliers/";

  titles : any[] = [
    {
      title : "ID",
      field : "id"
    },
    {
      title : "Supplier Name",
      field : "name"
    },
    {
      title : "Phone",
      field : "phone"
    },
    {
      title : "Email",
      field : "email"
    },
    {
      title : "Contact Person",
      field : "contact_person"
    },
    {
      title : "Contact Phone",
      field : "contact_phone"
    }
  ];

  add_supplier_form : FormGroup;
  api_errors : any = [];

  @ViewChild(BasicTableComponent)
  table : BasicTableComponent;

  constructor(private _modalService : ModalService,
    private _formService : FormItemService,
    private _toastService : ToastNotificationsService) {
    this.add_supplier_form = new FormGroup({
      name : new FormControl('',Validators.required),
      phone : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      contact_person : new FormControl('',Validators.required),
      contact_phone : new FormControl('',Validators.required),

    });

  }

  ngOnInit(): void {
  }
  private _http: HttpService;
  getTemplate(){
    let data = {
      url: "imports/template/",
      formData: {
        "model":"supplier"
      }
    };


    this._formService.postFile(true, data).subscribe(
      response => {

        saveAs(response, 'spark.xlsx')

      },
      (err: HttpErrorResponse) => {

        this._toastService.showToast("An Error Ocurred", "danger");

        this.api_errors = err.error;
      }
    );


  }

  onSubmitAdd(){
      //validate
      this.add_supplier_form.markAllAsTouched();
      if(this.add_supplier_form.invalid)return;


      //submit
      let data = {
        url: this.url,
        formData: this.add_supplier_form.value,
      };


      this._formService.postForm(true, data).subscribe(
        response => {
           this.add_supplier_form.reset();
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
    this._modalService.open('add-supplier-form');
  }
  cancel(){
    this._modalService.close('add-supplier-form');
  }
}
