import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { FieldForceRoutes } from './fieldforce-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountStatementComponent } from './accounts/account-statement/account-statement.component';
import { WthComponent } from './accounts/wth/wth.component';
import { AdjustmentsComponent } from './accounts/adjustments/adjustments.component';
import { BonusesComponent } from './bonuses/bonuses.component';
import { StatementComponent } from './statement/statement.component';
import { SuspendComponent } from './accounts/suspend/suspend.component';



@NgModule({
  declarations: [
    AccountsComponent,
    AccountStatementComponent,
    AdjustmentsComponent,
    WthComponent,
    BonusesComponent,
    StatementComponent,
    SuspendComponent
  ],
  imports: [
    
    CommonModule,
    RouterModule.forChild(FieldForceRoutes),
    SharedModule,
    CoreModule,
    NgSelectModule
  ]
})
export class FieldforceModule { }
