import { Component, ViewChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bonus-scheme',
  templateUrl: './bonus-scheme.component.html',
  styleUrls: ['./bonus-scheme.component.scss']
})
export class BonusSchemeComponent implements OnInit {
  url : string = "shop/";
  api_errors : any = [];

  add_spare_type_form: FormGroup;

  data : any[] = [];

    @Output()
  closeAction  : EventEmitter<any> = new EventEmitter();
  
  @Output()
  tableAction  : EventEmitter<any> = new EventEmitter();

  titles: any[] = [
    {
      title: 'NAME',
      field : 'part_code'
    },
    {
      title: 'SCHEME NUMBER',
      field : 'supplier_name'
    },
    {
      title: 'TARGET GROUP',
      field : 'description'
    },
    {
      title: 'START DATE',
      field : 'comment'
    },
    {
      title: 'END DATE',
      field : 're_order_level'
    },
    {
      title: 'CURRENT STATUS',
      field : 're_order_level'
    },
    {
      title: 'AMOUNT EARNED',
      field : 're_order_level'
    }, 
    {
      title : "Actions",
      field : "",
      action: true,
      actions: [
        "EDIT",
        "DEACTIVATE",
      ]
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
            re_order_level : new FormControl('',Validators.required),
            close_date : new FormControl('',Validators.required),
            open_date : new FormControl('',Validators.required),
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
