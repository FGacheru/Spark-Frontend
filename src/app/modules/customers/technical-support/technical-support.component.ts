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
  selector: 'app-technical-support',
  templateUrl: './technical-support.component.html',
  styleUrls: ['./technical-support.component.scss']
})
export class TechnicalSupportComponent implements OnInit {

  url : string = "technical-support/";
  titles : object[] = [
    {
      title:"TICKET NO",
      field : "ticket_number"
    }, 
    {
      title:"RECEIVED",
      field : "reception_date",
      date: true
    }, 
    {
      title:"RETURNED",
      field : "return_datee",
      date: true
    }, 
 
     {
       title : "CUSTOMER NO",
       field:"customer.id"
     },
     {
      title : "CUSTOMER NAME",
      field:"customer_name"
    },
    {
      title : "ITEM TYPE",
      field:"item_type"
    },
    {
      title : "ITEM SERIAL",
      field:"item_serial"
    },
    {
      title : "DESCRIPTION",
      field:"problem_description"
    },
    {
      title : "REPAIR CENTER",
      field:"repair_center"
    },
    {
      title : "TECHNICIAN",
      field:"technician_name"
    },
    {
      title : "WORK DONE",
      field:"work_done"
    },
    {
      title : "FEEDBACK",
      field:"repair_feedback"
    },
    {
      title : "charge",
      field:"repair_charge"
    },
    {
      title : "AMOUNT PAID",
      field:"amount_paid"
    },
     {
       
       title : "Actions",
       field : "",
       action: true,
       actions: [
         "UPDATE",
         "ARCHIVE",
       ]
     }
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

  syncAngaza(){
    
  }

  cancelModal(){
    this._modalService.closeAll();
  }

  createTicket(){
    this._modalService.open("ticket");
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
