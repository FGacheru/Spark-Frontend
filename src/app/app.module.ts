/** Angular imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
/** Main App Routing */
import { AppRoutes } from './app-routing.module';

/** Reusable modules */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';



/** Main App Components */
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { ModulesComponent } from './modules/modules.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastNotificationsService } from './shared/toast-notifications/toast-notifications.service';


@NgModule({
  declarations: [AppComponent, AuthenticationComponent, ModulesComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{ useHash : true}),
    CoreModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule,
    NgSelectModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: Interceptor,
    //   multi: true,
    // },
    ToastNotificationsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
