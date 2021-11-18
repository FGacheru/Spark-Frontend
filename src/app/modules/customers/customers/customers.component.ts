import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicTableHeaderComponent } from 'src/app/shared/tables/basic-table-header/basic-table-header.component';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { TableServiceService } from 'src/app/shared/tables/table-service.service';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormItemService } from 'src/app/services/forms/form-item.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  url : string = "customers/";
  titles : object[] = [
    {
      title:"CUSTOMER ID",
      field : "id"
    }, 
    {
      title : "NAME",
      field : "name",
    },
    {
      title : "PHONE",
      field : "primary_phone"
    },
    {
      title : "CONTRACT_NO",
      field : "contract_number"
    },
    {
      title : "PAYGO ID",
      field : "paygo_id",
    },
    {
      title : "REGION",
      field : "region"
     },
     {
       
      title : 'SALES REPRESENTATIVE',
      field : 'sales_rep' 
     },
     {
       title : "INSTALLER",
       field : "installer"
     },
     {
       title : "REGISTRATIO DATE",
       date : true,
       field:"registration_date"
     },
     {
       title : "PRODUCT",
       field : "purchase_order"
     },
     {
        title: "TOTAL LOAN",
        field : "total_loan"
     },
     {
        title: "TOTAL PAYMENT",
        field : "total_payment"
     },
     {
       title : "BALANCE",
       field : "balance"
     },
     {
       title : "STATUS",
       field: "status"
     },
     {
      title : "PAYMENT PERFORMANCE",
      field: "payment_performance"
    },
     {
       title : "Actions",
       field : "",
       action: true,
       actions: [
        {
          name : "VIEW CUSTOMER",
          type : "link",
          link : '/customers/data/'
         },
         "EDIT",
         "WRITE OFF",
         "REPOSSESS",
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
          case "EDIT":
            this._modalService.open("move-box");
            break;
          case "WRITE OFF":
            this._modalService.open("writeoff");
            break;  
          case "REPOSSESS":
            this._modalService.open("repossess");
            break;
        }
    });
  }
  



  reloadTable(){
    this.table.getTableData();
  }

  syncAngaza(){
    
  }

  cancelModal(){
    this._modalService.closeAll();
  }

  addUser(){
    this._modalService.open("add-customer");
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
