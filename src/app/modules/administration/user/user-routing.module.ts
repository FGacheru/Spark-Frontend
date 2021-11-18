import { Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";

export const UserRoutingModule : Routes = [
    {
        path: 'users',
        data : { breadcrumb : 'Users'},
        component : UsersComponent
    },
];