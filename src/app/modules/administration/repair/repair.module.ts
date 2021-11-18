import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparePartTypeComponent } from './spare-part-type/spare-part-type.component';
import { RouterModule } from '@angular/router';
import { AdministrationRepairRoutes } from './reapir-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SparePartTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdministrationRepairRoutes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class RepairModule { }
