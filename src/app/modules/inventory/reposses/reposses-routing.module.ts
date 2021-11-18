import { Routes } from '@angular/router';
import { CollectAtStoreRepossesComponent } from './collect-at-store-reposses/collect-at-store-reposses.component';


export const RepossesRoutes : Routes = [
    { path: 'collect-at-store', component: CollectAtStoreRepossesComponent, data: {breadcrumb: 'Collect at Store'}},
]