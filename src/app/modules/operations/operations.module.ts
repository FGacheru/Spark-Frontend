import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { OperationsRoutes } from './operations-routing.module';

import { RepairCenterComponent } from './repair-center/repair-center.component';
import { DispatchStockComponent } from './dispatch-stock/dispatch-stock.component';
import { HistoryComponent } from './repair-center/history/history.component';
import { UpdateRepairComponent } from './repair-center/update-repair/update-repair.component';
import { DispatchItemsComponent } from './dispatch-stock/dispatch-items/dispatch-items.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DiscrepanciesComponent } from './discrepancies/discrepancies.component';
import { ProcessingCenterComponent } from './processing-center/processing-center.component';



@NgModule({
  declarations: [
    RepairCenterComponent,
    DispatchStockComponent,
    HistoryComponent,
    UpdateRepairComponent,
    DispatchItemsComponent,
    DiscrepanciesComponent,
    ProcessingCenterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(OperationsRoutes),
    SharedModule,
    CoreModule,
    NgSelectModule
  ]
})
export class OperationsModule { }
