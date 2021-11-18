import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastNotificationsComponent } from './toast-notifications.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastNotificationsService } from './toast-notifications.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ToastNotificationsComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule
  ],
  exports: [
    ToastNotificationsComponent
  ],
  providers: []
})
export class ToastNotificationsModule { }
