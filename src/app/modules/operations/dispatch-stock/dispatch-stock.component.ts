import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicTableComponent } from '../../../shared/tables/basic-table/basic-table.component';
import { TableServiceService } from '../../../shared/tables/table-service.service';
import { ModalService } from '../../../services/modal/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormItemService } from '../../../services/forms/form-item.service';
import { ToastNotificationsService } from '../../../shared/toast-notifications/toast-notifications.service';

@Component({
  selector: 'app-dispatch-stock',
  templateUrl: './dispatch-stock.component.html',
  styleUrls: ['./dispatch-stock.component.scss']
})
export class DispatchStockComponent implements OnInit {

  url : string = "operations/get_items_in_stockroom/";
  titles : object[] = [
    {
      title:"CUSTOMER NO",
      field : "customer_no"
    },
    {
      title : "NAME",
      field : "customer_name",
    },
    {
      title : "ITEM TYPE",
      field : "item_type.name"
    },
    {
      title : "PAYGO ID",
      field : "item_type.paygo_id"
    },
    {
      title : "ITEM SERIAL NO",
      field : "item_serial_no",
    },
    {
      title : "DATE RECEIVED",
      field : "date"
    },
    {

      title : 'STATUS',
      field : 'status'
    },
    {
      title: 'select',
      field: "",
      select: true,
    },
    {
      title : "Actions",
      field : "",
      action: true,
      actions: [
        "HISTORY",
      ]
    }

  ];

  actionSubscribe : any;
  current_item : any;
  selected_items: any[] = [];

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
        case "select":
          this.selectItem(data.data);
      }
    });
  }




  reloadTable(){
    this.table.getTableData();
  }

  selectItem(data: any){

    //if data exists, remove it
    if(this.selected_items.includes(data.id)){

      this.selected_items = this.selected_items.filter(item => item !== data.id)
    }else{
      this.selected_items.push(data.id)
    }
  }

  cancelModal(){
    this._modalService.closeAll();
  }

  dispatchItems(){
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
