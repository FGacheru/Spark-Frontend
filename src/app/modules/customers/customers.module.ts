import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerRoutes } from './customers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { RepossessComponent } from './customers/repossess/repossess.component';
import { WriteoffComponent } from './customers/writeoff/writeoff.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';
import { TicketComponent } from './technical-support/ticket/ticket.component';
import { CustomerReferralComponent } from './customer-referral/customer-referral.component';
import { ReferralComponent } from './customer-referral/referral/referral.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditReferralComponent } from './customer-referral/edit-referral/edit-referral.component';
import { EditTicketComponent } from './technical-support/edit-ticket/edit-ticket.component';


@NgModule({
  declarations: [
    CustomersComponent,
    RepossessComponent,
    WriteoffComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerDataComponent,
    TechnicalSupportComponent,
    TicketComponent,
    CustomerReferralComponent,
    ReferralComponent,
    EditReferralComponent,
    EditTicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes),
    SharedModule,
    CoreModule,
    NgSelectModule,
  ],
})
export class CustomersModule { }
