import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormItemService } from '../../../../services/forms/form-item.service';
import { ToastNotificationsService } from '../../../../shared/toast-notifications/toast-notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BasicTableComponent } from '../../../../shared/tables/basic-table/basic-table.component';
import { TableServiceService } from '../../../../shared/tables/table-service.service';
import { ModalService } from '../../../../services/modal/modal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  url : string = "technical-support/";
  titles : object[] = [
    {
      title:"TICKET NO",
      field : "ticket_number"
    },
    {
      title:"CHECKIN DATE",
      field : "reception_date",
      date: true
    },
    {
      title:"CHECKOUT DATE",
      field : "return_datee",
      date: true
    },



    {
      title : "FAULT DESCRIPTION",
      field:"problem_description"
    },
    {
      title : "REPAIR CENTER",
      field:"repair_center"
    },
    {
      title : "REPAIR DESCRIPTION",
      field:"repair_description"
    },
    {
      title : "TECHNICIAN",
      field:"technician"
    },
    {
      title : "PART USED",
      field:"parts_used"
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
