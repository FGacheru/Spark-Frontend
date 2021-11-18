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
  selector: 'app-customer-referral',
  templateUrl: './customer-referral.component.html',
  styleUrls: ['./customer-referral.component.scss']
})
export class CustomerReferralComponent implements OnInit {
  url : string = "customer-referral/";
  titles : object[] = [
    {
      title:"DATE",
      field : "date",
      date: true
    }, 
    {
      title:"REFERRER NAME",
      field : "referrr_name",
    }, 
     {
       title : "CUSTOMER NO",
       field: "referrer_name.id"
     },
     {
      title : "CUSTOMER PHONE",
      field:"referrr_phone"
    },
    {
      title : "PROSPECT NAME",
      field:"prospect_name"
    },
    {
      title : "PROSPECT PHONE NO",
      field:"prospect_phone_no"
    },
    {
      title : "REFERRAL BONUS TYPE",
      field:"bonus_type"
    },
    {
      title : "VALUE AMOUNT",
      field:"amount"
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
            this._modalService.open("edit-referral");
            break;
          case "ARCHIVE":
            this._modalService.open("archive-box");
            break;  
        }
    });
  }
  
  archive(){
    let data : any = {
       url: `customer-referral/archive/`,
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
