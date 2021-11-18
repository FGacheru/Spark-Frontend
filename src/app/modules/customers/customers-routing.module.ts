import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-guards/auth.guards';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';
import { CustomerReferralComponent } from './customer-referral/customer-referral.component';



export const CustomerRoutes: Routes = [
    { path: 'customers', component: CustomersComponent, data: {breadcrumb: 'List Customers'}},
    { path: 'customers/data/:id', component: CustomerDataComponent, data: {breadcrumb: 'Customer Info'},pathMatch: 'full'},
    { path: 'technicalsupport', component: TechnicalSupportComponent, data: {breadcrumb: 'Technical Support'}},
    { path: 'customerreferral', component: CustomerReferralComponent, data: {breadcrumb: 'Customer Referral'}},
]