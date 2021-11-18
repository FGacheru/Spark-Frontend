import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BasicTableHeaderComponent } from './basic-table-header/basic-table-header.component';
import { BasicTableCellComponent } from './basic-table-cell/basic-table-cell.component';
import { MypaginationComponent } from './mypagination/mypagination.component';
import { TableLoaderComponent } from './table-loader/table-loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChangelogTableComponent } from './changelog-table/changelog-table.component';
import { ChangelogTableCellComponent } from './changelog-table-cell/changelog-table-cell.component';
import { ChangeLogTableHeaderComponent } from './chnagelog-table-header/changelog-table-header.component';
import { CheckedTableComponent } from './checked-table/checked-table.component';



@NgModule({
  declarations: [
    BasicTableComponent,
    BasicTableHeaderComponent,
    BasicTableCellComponent,
    MypaginationComponent,
    TableLoaderComponent,
    ChangelogTableComponent,
    ChangelogTableCellComponent,
    ChangeLogTableHeaderComponent,
    CheckedTableComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BasicTableComponent,
    TableLoaderComponent,
    BasicTableHeaderComponent,
    BasicTableCellComponent,
    ChangelogTableComponent,
    CheckedTableComponent

  ]
})
export class TablesModule { }
