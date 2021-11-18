import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectAtStorreComponent } from './collect-at-storre/collect-at-storre.component';
import { RouterModule } from '@angular/router';
import { RepairRoutes } from './repair-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { PartUsageReportComponent } from './part-usage-report/part-usage-report.component';
import { PartsReceivedComponent } from './parts-received/parts-received.component';
import { PartsAdjustmentsComponent } from './parts-adjustments/parts-adjustments.component';
import { CheckinComponent } from './parts-received/checkin/checkin.component';



@NgModule({
  declarations: [
    CollectAtStorreComponent,
    PartUsageReportComponent,
    PartsReceivedComponent,
    PartsAdjustmentsComponent,
    CheckinComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RepairRoutes),
    SharedModule,
    FontAwesomeModule,
    NgSelectModule
  ]
})
export class RepairModule { }
