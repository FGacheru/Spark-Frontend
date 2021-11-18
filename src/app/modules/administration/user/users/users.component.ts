import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { BasicTableHeaderComponent } from 'src/app/shared/tables/basic-table-header/basic-table-header.component';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { TableServiceService } from 'src/app/shared/tables/table-service.service';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormItemService } from 'src/app/services/forms/form-item.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input()
  current_store : any;

  url : string = "users/";
  titles : object[] = [
    {
      title:" USER ID",
      field : "id"
    },
    {
      title : "USERNAME",
      field : "username",
    },
    {
      title : "PHONE NUMBER",
      field : "phone"
    },
    {
      title : "HUDUMA NUMBER",
      field : "huduma_number"
    },
    {
      title : "EMAIL",
      field : "email",
    },
    {
      title : "KRA PIN",
      field : "kra_pin"
     },
     {

      title : 'ROLE',
      field : 'role_name'
     },
     {
       title : "FIRST NAME",
       field : "first_name"
     },
     {
       title : "LAST NAME",
       field:"last_name"
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

  actionSubscribe : any;



  @ViewChild(BasicTableComponent)
  table : BasicTableComponent;

   constructor(private _tableService : TableServiceService,
     private _modalService :ModalService,
     private route : ActivatedRoute,
     private _router : Router ,private _formService : FormItemService,
     private _toastService: ToastNotificationsService) {

    this.actionSubscribe =  _tableService.actionListeners.subscribe((data : any) => {
        this.current_store = data.data;
        console.log(this.current_store);
        switch(data.action) {
          case "EDIT":
            this._modalService.open("edit_user");
            break;
          case "DEACTIVATE":
            this._modalService.open("deactivate");
            break;
        }
    });
  }




  reloadTable(){
    this.table.getTableData();
  }

  cancelModal(){
    this._modalService.closeAll();
  }

  addUser(){
    this._modalService.open('add_user')
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
