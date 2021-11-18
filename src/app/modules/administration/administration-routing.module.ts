import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/auth-guards/auth.guards";
import { UsersComponent } from "./user/users/users.component";
import { ShopComponent } from "./shop/shop.component";
import { BonusSchemeComponent } from "./bonus-scheme/bonus-scheme.component";

export const AdministrationRoutes: Routes = [
  {
      path : 'inventory',
      data: { breadcrumb: 'Inventory' },
      loadChildren: () =>
       import(`./inventory/inventory.module`).then((m) => m.InventoryModule), canActivate: [AuthGuard] 
  },
  {
    path : 'repair',
    data: { breadcrumb: 'Repair' },
    loadChildren: () =>
     import(`./repair/repair.module`).then((m) => m.RepairModule), canActivate: [AuthGuard]
  },
  {
    path: 'users',
    data: {breadcrumb: 'users'},
    component: UsersComponent,
  },
  {
    path: 'shop',
    data: {breadcrumb: 'shop'},
    component: ShopComponent,

  },
  {
    path: 'bonus-scheme',
    data: {breadcrumb: 'bonus-scheme'},
    component: BonusSchemeComponent,

  }
]