import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdministrationRoutes } from './administration-routing.module';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BonusSchemeComponent } from './bonus-scheme/bonus-scheme.component';
import { EditComponent } from './shop/edit/edit.component';
import { ArchiveComponent } from './shop/archive/archive.component';


@NgModule({
  declarations: [
    ShopComponent,
    BonusSchemeComponent,
    EditComponent,
    ArchiveComponent
  ],
  imports: [
    RouterModule.forChild(AdministrationRoutes),
    CommonModule,
    SharedModule
  ]
})
export class AdministrationModule { }
