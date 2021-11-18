import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectAtStoreRepossesComponent } from './collect-at-store-reposses/collect-at-store-reposses.component';
import { RouterModule } from '@angular/router';
import { RepossesRoutes } from './reposses-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CollectAtStoreRepossesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RepossesRoutes),
    FontAwesomeModule,
    SharedModule
  ]
})
export class RepossesModule { }
