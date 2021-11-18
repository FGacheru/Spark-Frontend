import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdministrationInvetoryRoutes } from './invetory-routing.module';
import { ItemsTypeConfigComponent } from './items-type-config/item-type-config.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxsComponent } from './boxs/boxs.component';
import { PriceGroupComponent } from './price-group/price-group.component';
import { AddPriceGroupComponent } from './price-group/add-price-group/add-price-group.component';
import { PayGoProvidersComponent } from './pay-go-providers/pay-go-providers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { ItemConfigComponent } from './item-config/item-config.component';



@NgModule({
  declarations: [
    ItemsTypeConfigComponent,
    BoxsComponent,
    PriceGroupComponent,
    AddPriceGroupComponent,
    PayGoProvidersComponent,
    SuppliersComponent,
    ProductTypeComponent,
    ItemConfigComponent
  ],
  imports: [
    RouterModule.forChild(AdministrationInvetoryRoutes),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InventoryModule { }
