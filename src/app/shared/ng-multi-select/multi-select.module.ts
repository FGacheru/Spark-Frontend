import { NgModule } from '@angular/core';
import { MultiSelectComponent } from './multi-select.component';
import { MultiSelectService } from './multi-select.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [MultiSelectComponent],
  providers: [MultiSelectService]
})
export class MultiSelectModule { }
