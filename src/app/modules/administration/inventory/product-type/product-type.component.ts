import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
  url : string = "product-configs/";
  api_errors : any = [];

  add_product_type_form: FormGroup;

  data : any[] = [
    
  ];

  price_group_loading: false;
  price_groups: any[] = []

  titles: any[] = [
    {
      title : 'ID',
      field : 'id'
    },
    {
      title: 'NAME',
      field : 'name'
    },
    {
      title: 'PRICE GROUP',
      field : 'price_group_config_details.name'
    },
    {
      title: 'Boxes',
      field : 'boxes'
    },
    {
      title: 'DATE',
      field : 'date',
      date : true
    },
    {
      title: 'Description',
      field : 'description'
    },
    {
      title : "Actions",
      field : "",
      action: true,
      actions: [
        "EDIT",
        "ARCHIVE",
      ]
    }
  ];
  
  box_parameter : any = {
    "type": "field",
    "required": true,
    "read_only": false,
    "label": "Boxes",
    "display_name": "name",
    "value_field": "id",
    "multiple": true,
    "url": `box-configs/`,
    "search_field": "name",
    "args": "users",
    "edit_source_field": "boxes",
    "edit_display_name": "box_name",
    "res_value_field": "box_config",
    "isMap" : true
  };


  
  @ViewChild(BasicTableComponent)
  table : BasicTableComponent;


  constructor(private _formService : FormItemService,
    private _modalService : ModalService,
    private _toastService : ToastNotificationsService,
    private _modal : ModalService ) {
       

       this.add_product_type_form = new FormGroup(
         {
          name : new FormControl('',Validators.required),
          price_group_config : new FormControl('',Validators.required),
          boxes : new FormControl('',Validators.required),
          date : new FormControl('',Validators.required),
          description: new FormControl('',Validators.required)
         }
       );

                //get suppliers
    this._formService.getDropdownValues(`price-group-configs/`).subscribe(
      response => {
        this.price_group_loading = false;
        this.price_groups = response.results;
      },
      err => {
        this.price_group_loading = false;
      }
    );
    }


  ngOnInit(): void {
  }

  onSubmitAdd(){
    console.log("VALUES");
   console.log(this.add_product_type_form.value)
   if(this.add_product_type_form.invalid){
    console.log(this.add_product_type_form.errors);
  }
  
  console.log(this.add_product_type_form.value);
  let data : any = {
   url : 'product-configs/',
   formData : this.add_product_type_form.value
  };

 this._formService.postForm(true,data).subscribe(
   response => {
     this.cancel();
     this._toastService.showToast("SPARE PART CREATED SUCCESSFULLY!", "success");
     this.table.getTableData();
   },
   (err: HttpErrorResponse) => {
     this._toastService.showToast("An Error Ocurred", "danger");
   }
   );
  }

  openAdd(){
    this._modalService.open('add-product-type');
  }

  cancel(){
    this._modalService.close('add-product-type');
  }  

}
