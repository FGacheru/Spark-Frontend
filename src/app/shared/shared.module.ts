/** Angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Custom modules */
import { ToastNotificationsModule } from './toast-notifications/toast-notifications.module';

/** Components */
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardComponent } from './card/card.component';
import { TablesModule } from './tables/tables.module';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { ModalComponent } from './modal/modal.component';
import { MultiSelectModule } from './ng-multi-select/multi-select.module';
import { DropdownTableComponent } from './dropdown-table/dropdown-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChangelogTableCellComponent } from './tables/changelog-table-cell/changelog-table-cell.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    CardComponent,
    DefaultButtonComponent,
    ModalComponent,
    DropdownTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastNotificationsModule,
    TablesModule,
    FontAwesomeModule
  ],
  exports: [
    DefaultButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    ToastNotificationsModule,
    BreadcrumbComponent,
    CardComponent,
    TablesModule,
    ModalComponent,
    MultiSelectModule,
    DropdownTableComponent,
  ],
  providers :[
  
  ]
})
export class SharedModule { }
