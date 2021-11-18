import { Routes } from "@angular/router";
import { SparePartTypeComponent } from "./spare-part-type/spare-part-type.component";

export const AdministrationRepairRoutes : Routes = [
    {
        path: 'spare-part-types',
        data : { breadcrumb : 'Spare Parts'},
        component : SparePartTypeComponent
    },
];