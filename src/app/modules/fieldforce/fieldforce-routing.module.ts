import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth-guards/auth.guards';
import { AccountsComponent } from './accounts/accounts.component';
import { BonusesComponent } from './bonuses/bonuses.component';
import { StatementComponent } from './statement/statement.component';

export const FieldForceRoutes: Routes = [
    //this will be welcome page
    { path: 'accounts', component: AccountsComponent, data: {breadcrumb: 'accounts'}},
    { path: 'bonuses', component: BonusesComponent, data: {breadcrumb: 'bonuses'}},
    { path: 'statement-page', component: StatementComponent, data: {breadcrumb: 'statement-page'}},

]