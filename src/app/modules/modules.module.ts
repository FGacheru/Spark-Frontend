import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ModulesRoutes } from './modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryModule } from './inventory/inventory.module';
import { FieldforceModule } from './fieldforce/fieldforce.module';
import { AdministrationModule } from './administration/administration.module';
import { CustomersModule } from './customers/customers.module';
import { UserModule } from './administration/user/user.module';
import {OperationsModule} from './operations/operations.module';

//import { ToastNotificationsService } from '../shared/toast-notifications/toast-notifications.service';


@NgModule({
  declarations: [DashboardComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(ModulesRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    InventoryModule,
    AdministrationModule,
    CustomersModule,
    UserModule,
    OperationsModule,
    FieldforceModule
  ],
  providers: []
})
export class ModulesModule { }
