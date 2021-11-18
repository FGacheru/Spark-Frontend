import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-guards/auth.guards';
import { BoxHistoryComponent } from './box-history/box-history.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ListBoxesComponent } from './list-boxes/list-boxes.component';


export const InventoryRoutes: Routes = [
    //this will be welcome page
    { path: 'list', component: ListBoxesComponent, data: {breadcrumb: 'List Items'}},
    { path: 'check-in', component: CheckInComponent, data: {breadcrumb: 'Box Check In'}},
    { path: 'box-history/:id', component : BoxHistoryComponent , data : { breadcrumb : 'Box History'},pathMatch: 'full' },
    { path: 'box-change-log', component : ChangeLogComponent, data : { breadcrumb : 'Inventory Box Chnage Log'} },
    {
        path: 'repair',
        data: { breadcrumb: 'Repair' },
        loadChildren: () =>
          import(`./repair/repair.module`).then((m) => m.RepairModule), canActivate: [AuthGuard]
    },
    {
        path: 'reposses',
        data: { breadcrumb: 'Reposses' },
        loadChildren: () =>
          import(`./reposses/reposses.module`).then((m) => m.RepossesModule), canActivate: [AuthGuard]
    },


]