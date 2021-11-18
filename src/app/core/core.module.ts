import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
/** App Interceptor */
import { Interceptor } from '../core/interceptors/interceptor';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './structure/footer/footer.component';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { ErrorNotFoundComponent } from './errors/error-not-found/error-not-found.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ErrorNotFoundComponent,
    LockScreenComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [FooterComponent, NavbarComponent],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ]
})
export class CoreModule { }
