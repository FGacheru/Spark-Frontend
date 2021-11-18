import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-guards/auth.guards';
import { RepairCenterComponent } from './repair-center/repair-center.component';
import { DispatchStockComponent } from './dispatch-stock/dispatch-stock.component';

export const OperationsRoutes: Routes = [
    //this will be welcome page
    { path: 'repair-center', component: RepairCenterComponent, data: {breadcrumb: 'Repair Center'}},
    { path: 'dispatch-stock', component: DispatchStockComponent, data: {breadcrumb: 'Dispatch Stock'}}


]