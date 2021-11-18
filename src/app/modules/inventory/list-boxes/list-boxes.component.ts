import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormItemService } from 'src/app/services/forms/form-item.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { BasicTableHeaderComponent } from 'src/app/shared/tables/basic-table-header/basic-table-header.component';
import { BasicTableComponent } from 'src/app/shared/tables/basic-table/basic-table.component';
import { TableServiceService } from 'src/app/shared/tables/table-service.service';
import { ToastNotificationsService } from 'src/app/shared/toast-notifications/toast-notifications.service';
import { ModulesRoutes } from '../../modules-routing.module';

@Component({
  selector: 'app-list-boxes',
  templateUrl: './list-boxes.component.html',
  styleUrls: ['./list-boxes.component.scss']
})
export class ListBoxesComponent implements OnInit {

  url : string = "boxs/";
  titles : object[] = [
    {
      title:"DB ID",
      field : "id"
    },
    {
      title : "PAYGO ID",
      field : "paygo_id",
    },
    {
      title : "SERIAL NUMBER",
      field : "serial"
    },
    {
      title : "BOX TYPE",
      field : "box_config.name"
    },
    {
      title : "CHECK-IN DATE",
      field : "created",
      date : true
    },
    {
      title : "CHECK-IN WAREHOUSE",
      field : "store.name"
     },
     {

      title : 'SUPPLIER',
      field : 'supplier.name'
     },
     {
       title : "CURRENT LOCATION",
       field : "store.name"
     },
     {
       title : "LAST MOVE DATE",
       date : true,
       field:""
     },
     {
       title : "P.O NUMBER",
       field : "purchase_order"
     },
     {
        title: "SIZE/CAPACITY",
        field : "capacity"
     },
     {
        title: "INVENTORY STATUS",
        field : "inventory_status"
     },
     {
       title : "OWNERSHIP STATUS",
       field : "ownership_status"
     },
     {
       title : "DESCRIPTION",
       field: "description"
     },
     {
       title : "Actions",
       field : "",
       action: true,
       actions: [
         "MOVE",
         "EDIT",
         "ARCHIVE",
         "REPLACE PAYGO ID",
         {
           name : "VIEW HISTORY",
           type : "link",
           link : '/inventory/box-history/'
          }
       ]
     }
  ];

  actionSubscribe : any;
  current_item : any;

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
          case "MOVE":
            this._modalService.open("move-box");
            break;
          case "ARCHIVE":
            this._modalService.open("archive-box");
            break;
          case "REPLACE PAYGO ID":
            this._modalService.open("change-paygo");
            break;
          case "EDIT":
            this._modalService.open("edit-box");
            break;
          case "VIEW HISTORY":

            break;
        }
    });
  }


  ngOnInit() {}


  archive(){
     let data : any = {
        url: `boxs/archive/`,
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

  openExcel(){
    this._modalService.open('bulk_action')
  }


  reloadTable(){
    this.table.getTableData();
  }

  cancelModal(){
    this._modalService.closeAll();
  }

  ngOnDestroy() {
    const subscriptions = [this.actionSubscribe] //other subsciptions this.actionsSubscription, this.deleteSubscription,
    subscriptions.forEach(subs => {
      if (subs) {
        subs.unsubscribe()
      }
    })
  }



}
