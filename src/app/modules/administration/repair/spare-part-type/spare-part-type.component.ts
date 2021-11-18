import { Component, ViewChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-spare-part-type',
  templateUrl: './spare-part-type.component.html',
  styleUrls: ['./spare-part-type.component.scss']
})
export class SparePartTypeComponent implements OnInit {
  url : string = "spareparts/types/";
  api_errors : any = [];

  add_spare_type_form: FormGroup;

  data : any[] = [];

    @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  titles: any[] = [
    {
      title: 'PART CODE',
      field : 'part_code'
    },
    {
      title: 'SUPPLIER NAME',
      field : 'supplier_name'
    },
    {
      title: 'PART DESCRIPTION',
      field : 'description'
    },
    {
      title: 'COMMENT',
      field : 'comment'
    },
    {
      title: 'RE-ORDER LEVEL',
      field : 're_order_level'
    }
  ];

  suppliers : any[] = [];
  
  supplier_loading = true;

  @ViewChild(BasicTableComponent)
  table : BasicTableComponent;


  constructor(private _formService : FormItemService,
    private _modalService : ModalService,private _toastService : ToastNotificationsService,
    private _modal : ModalService ) {
        
         this.add_spare_type_form = new FormGroup({
            part_code : new FormControl('',Validators.required),
            supplier :new FormControl('',Validators.required),
            description : new FormControl('',Validators.required),
            comment : new FormControl('',Validators.required),
            re_order_level : new FormControl('',Validators.required) 
         });

             //get suppliers
    this._formService.getDropdownValues(`suppliers/`).subscribe(
      response => {
        this.supplier_loading = false;
        this.suppliers = response.results;
      },
      err => {
        this.supplier_loading = false;
      }
    );
    }

  ngOnInit(): void {

  }

  reloadTable(){
    this.table.getTableData();
  }

  onSubmitAdd(){

    if(this.add_spare_type_form.invalid){
      console.log(this.add_spare_type_form.errors);
    }
    
    console.log(this.add_spare_type_form.value);
    let data : any = {
     url : 'spareparts/',
     formData : this.add_spare_type_form.value
    };
  
   this._formService.postForm(true,data).subscribe(
     response => {
       this.cancel();
       this._toastService.showToast("SPARE PART CREATED SUCCESSFULLY!", "success");
       this.tableAction.emit();
       this.reloadTable();
     },
     (err: HttpErrorResponse) => {
       this._toastService.showToast("An Error Ocurred", "danger");
     }
     );

  }

  openAdd(){
    this._modalService.open('add-spare-part');
  }

  cancel(){
    this._modalService.close('add-spare-part');
  }  

}
