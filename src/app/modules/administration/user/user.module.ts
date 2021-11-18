import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddRoleComponent } from './users/add-role/add-role.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditUserComponent } from './users/edit-user/edit-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    AddRoleComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutingModule),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    NgSelectModule,
  ]
})
export class UserModule { }
