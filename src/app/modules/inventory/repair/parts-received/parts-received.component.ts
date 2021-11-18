import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicTableHeaderComponent } from 'src/app/shared/tables/basic-table-header/basic-table-header.component';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { TableServiceService } from 'src/app/shared/tables/table-service.service';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-parts-received',
  templateUrl: './parts-received.component.html',
  styleUrls: ['./parts-received.component.scss']
})
export class PartsReceivedComponent implements OnInit {

  url : string = "spareparts/";
  titles : object[] = [
    {
      title:"PART CODE",
      field : "code"
    }, 
    {
      title:"SUPPLIER NAME",
      field : "supplier_name",
  
    }, 
    {
      title:"PART DESCRIPTION",
      field : "part_description",
      
    }, 
 
     {
       title : "PART COMMENT",
       field:"part_comment"
     },
     {
      title : "NUMBER RECEIVED WARRANTY",
      field:"number_received_warranty"
    },
    {
      title : "NUMBER RECEIVED NON-WARRANTY",
      field:"number_received_non_warranty"
    },
    {
      title : "DATE OF RECEIPT",
      field:"date_of_receipt",
      date: true
    },
    {
      title : "P.0",
      field:"PO"
    },
    {
      title : "COMMNET",
      field:"comment"
    },
  ];
  
  actionSubscribe : any;
  current_item : any;

  users: any[] = [];
  users_loading = true;


  @ViewChild(BasicTableComponent)
  table : BasicTableComponent;

   constructor(private _tableService : TableServiceService, 
     private _modalService :ModalService,
     private route : ActivatedRoute,
     private _router : Router ,private _formService : FormItemService,
     private _toastService: ToastNotificationsService) { 
  
    this.actionSubscribe =  _tableService.actionListeners.subscribe((data : any) => {
        this.current_item = data.data;
        switch(data.action) {
          case "UPDATE":
            this._modalService.open("edit-ticket");
            break;
          case "ARCHIVE":
            this._modalService.open("archive-box");
            break;  
        }
    });
  }
  
  archive(){
    let data : any = {
       url: `technical-support/archive/`,
       formData: {
         id : this.current_item.id
       },  
    };

    this._formService.postForm(true,data).subscribe(
     response => {
       this.cancelModal();
       this.reloadTable();
     },
     (err: HttpErrorResponse) => {
       this._toastService.showToast("An Error Ocurred", "danger");
     }
    );
 }



  reloadTable(){
    this.table.getTableData();
  }

 

  cancelModal(){
    this._modalService.closeAll();
  }

  checkin(){
    this._modalService.open("checkin");
  }

  ngOnDestroy() {
    const subscriptions = [this.actionSubscribe] //other subsciptions this.actionsSubscription, this.deleteSubscription, 
    subscriptions.forEach(subs => {
      if (subs) {
        subs.unsubscribe()
      }
    })
  }



  ngOnInit(): void {
  }

}
