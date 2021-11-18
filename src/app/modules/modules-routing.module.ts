import { Routes } from '@angular/router';
import { AuthGuard } from '../core/auth-guards/auth.guards';
import { CustomersComponent } from './customers/customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ModulesRoutes: Routes = [

  {
    path: 'inventory',
    data: { breadcrumb: 'Inventory' },
    loadChildren: () =>
      import(`./inventory/inventory.module`).then((m) => m.InventoryModule), canActivate: [AuthGuard]
  },
  {
    path: 'administration',
    data: { breadcrumb: 'Administration' },
    loadChildren: () =>
       import(`./administration/administration.module`).then((m) => m.AdministrationModule), canActivate: [AuthGuard] 
  },
  {
    path: 'customers',
    component: CustomersComponent,
    data: {breadcrumb: 'Customers'}
  },
  { path: '', redirectTo : 'home',},
  { path: '/', redirectTo :'home' , },
  { path: 'home', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
]