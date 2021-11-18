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
  selector: 'app-part-usage-report',
  templateUrl: './part-usage-report.component.html',
  styleUrls: ['./part-usage-report.component.scss']
})
export class PartUsageReportComponent implements OnInit {

  url : string = "spareparts/";
  titles : object[] = [
    {
      title:"PART CODE",
      field : "ticket_number"
    }, 
    {
      title:"SUPPLIER NAME",
      field : "reception_date"
    }, 
    {
      title:"PART DESCRIPTION",
      field : "return_datee",
    }, 
 
     {
       title : "COMMENT",
       field:"customer.id"
     },
     {
      title : "NUMBER RECEIVED WARRANTY",
      field:"customer.name"
    },
    {
      title : "NUMBER RECEIVED NON-WARRANTY",
      field:"item_type"
    },
    {
      title : "NUMBER RECEIVED TOTAL",
      field:"item_serial"
    },
    {
      title : "NUMBER USED TOTAL",
      field:"problem_description"
    },
    {
      title : "NUMBER ADJUSTED WARRANTY",
      field:"repair_center"
    },
    {
      title : "NUMBER ADJUSTED NON-WARRANTY",
      field:"technician"
    },
    {
      title : "NUMBER ADJUSTED TOTAL",
      field:"work_done"
    },
    {
      title : "BALANCE WARRANTY",
      field:"work_done"
    },
    {
      title : "BALANCE NON-WARRANTY",
      field:"work_done"
    },
    {
      title : "BALANCE TOTAL",
      field:"work_done"
    },
    {
      title : "RE-ORDER LEVEL",
      field:"work_done"
    },
    {
      title : "RE-ORDER FLAG",
      field:"work_done"
    },
     {
       
       title : "Actions",
       field : "",
       action: true,
       actions: [
         "WITHHOLD PAYMENTS",
         "ACCOUNT STATEMENT",
         "ADJUSTMENTS",
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
