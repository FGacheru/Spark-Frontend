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
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  url : string = "fieldforce/";
  titles : object[] = [
    {
      title:"#",
      field : "id"
    }, 
    {
      title:"NAME",
      field : "full_name",
    }, 
    {
      title:"TEAM ID",
      field : "team_id",
    }, 
 
     {
       title : "EARNINGS",
       field:"earning"
     },
     {
      title : "BONUSES",
      field:"bonus"
    },
    {
      title : "DEDUCTIONS",
      field:"deduction"
    },
    {
      title : "WTH",
      field:"withheld"
    },
    {
      title : "Suspended",
      field:"suspended"
    },
    {
      title : "EARNING ADJUSTMENTS",
      field:"earnings_adjustment"
    },
    {
      title : "PAYMENT ADJUSTMENTS",
      field:"payments_adjustment"
    },
    {
      title : "PAYMENTS",
      field:"payment"
    },
    {
      title : "BALANCE",
      field:"balance"
    },
     {
       
       title : "Actions",
       field : "",
       action: true,
       actions: [
         "WITHHOLD PAYMENTS",
         "SUSPEND",
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
          case "WITHHOLD PAYMENTS":
            this._modalService.open("wth-payment");
            break;
          case "ACCOUNT STATEMENT":
            this._modalService.open("account-statement");
            break;  
          case "ADJUSTMENTS":
            this._modalService.open("adjustments");
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
