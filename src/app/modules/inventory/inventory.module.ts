import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './check-in/check-in.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { InventoryRoutes } from './inventory-routing.module';
import { ListBoxesComponent } from './list-boxes/list-boxes.component';
import { MoveBoxComponent } from './list-boxes/move-box/move-box.component';
import { ChangePayGoComponent } from './list-boxes/change-pay-go/change-pay-go.component';
import { EditBoxComponent } from './list-boxes/edit-box/edit-box.component';
import { BoxHistoryComponent } from './box-history/box-history.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { BulkActionsComponent } from './list-boxes/bulk-actions/bulk-actions.component';


@NgModule({
  declarations: [
    CheckInComponent,
    ListBoxesComponent,
    MoveBoxComponent,
    ChangePayGoComponent,
    EditBoxComponent,
    BoxHistoryComponent,
    ChangeLogComponent,
    BulkActionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(InventoryRoutes),
    SharedModule,
    CoreModule,
  ]
})
export class InventoryModule { }
