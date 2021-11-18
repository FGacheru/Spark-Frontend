import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { ToastNotificationsService } from './toast-notifications.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

declare var $: any;
@Component({
  selector: 'app-toast-notifications',
  templateUrl: './toast-notifications.component.html',
  styleUrls: ['./toast-notifications.component.scss']
})
export class ToastNotificationsComponent implements OnInit, OnDestroy {
   _toasts:any = [];
   faEdit = faEdit;
  constructor(public toastService: ToastNotificationsService) { 
  }

  ngOnInit() {
    this.toastService.toasts.subscribe(response => {
      this._toasts = response;
      console.log(response)
    })
    // this.toastService.update("Message1", "info")
  }

  closeToast(index: number){
    console.log(index);
    this.toastService.removeToast(index);
  }

  ngOnDestroy(){
    this._toasts = []
    this.toastService.toasts.unsubscribe();
  }
}


