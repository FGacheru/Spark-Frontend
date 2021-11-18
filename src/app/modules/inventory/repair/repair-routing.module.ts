import { Routes } from '@angular/router';
import { CollectAtStorreComponent } from './collect-at-storre/collect-at-storre.component';
import { PartUsageReportComponent } from './part-usage-report/part-usage-report.component';
import { PartsAdjustmentsComponent } from './parts-adjustments/parts-adjustments.component';
import { PartsReceivedComponent } from './parts-received/parts-received.component';

export const RepairRoutes : Routes = [
    { path: 'collect-at-store', component: CollectAtStorreComponent, data: {breadcrumb: 'Collect at Store'}},
    { path: 'part-usage-report', component: PartUsageReportComponent, data: {breadcrumb: 'Part Usage Report'}},
    { path: 'parts-adjustment', component: PartsAdjustmentsComponent, data: {breadcrumb: 'Parts Adjustment'}},
    { path: 'parts-received', component: PartsReceivedComponent, data: {breadcrumb: 'Parts Received'}},
]