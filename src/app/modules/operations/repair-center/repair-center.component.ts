import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicTableComponent } from '../../../shared/tables/basic-table/basic-table.component';
import { TableServiceService } from '../../../shared/tables/table-service.service';
import { ModalService } from '../../../services/modal/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormItemService } from '../../../services/forms/form-item.service';
import { ToastNotificationsService } from '../../../shared/toast-notifications/toast-notifications.service';

@Component({
  selector: 'app-repair-center',
  templateUrl: './repair-center.component.html',
  styleUrls: ['./repair-center.component.scss']
})
export class RepairCenterComponent implements OnInit {

  url : string = "operations/repair_management/";
  titles : object[] = [
    {
      title:"RECEIPT DATE",
      field : "date",
      date:true
    },
    {
      title : "TICKET NO",
      field : "ticket_no",
    },
    {
      title : "ITEM SERIAL NO",
      field : "item_serial_no"
    },
    {
      title : "ITEM TYPE",
      field : "item_type"
    },
    {
      title : "STATUS",
      field : "status",
    },
    {
      title : "PRIORITY",
      field : "priority"
    },
    {

      title : 'REPAIR COUNT',
      field : 'repair_count'
    },
    {
      title : "FAULT DESCRIPTION",
      field : "description"
    },
    {
      title : "WORK DONE",
      field:"work_done"
    },
    {
      title : "Actions",
      field : "",
      action: true,
      actions: [
        "UPDATE",
        "HISTORY",
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
          this._modalService.open("update-repair");
          break;
        case "HISTORY":
          this._modalService.open("history");
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
