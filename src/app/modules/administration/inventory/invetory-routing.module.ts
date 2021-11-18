import { Routes } from "@angular/router";
import { BoxsComponent } from "./boxs/boxs.component";
import { ItemsTypeConfigComponent } from "./items-type-config/item-type-config.component";
import { PayGoProvidersComponent } from "./pay-go-providers/pay-go-providers.component";
import { AddPriceGroupComponent } from "./price-group/add-price-group/add-price-group.component";
import { PriceGroupComponent } from "./price-group/price-group.component";
import { ProductTypeComponent } from "./product-type/product-type.component";
import { SuppliersComponent } from "./suppliers/suppliers.component";
import { ItemConfigComponent } from './item-config/item-config.component'


export const AdministrationInvetoryRoutes :Routes = [
    {
        path: 'item-type-config',
        data : { breadcrumb : 'Items Type Config'},
        component : ItemsTypeConfigComponent
    },
    {
       path : 'item-config',
       data : { breadcrumb : 'Items Config'},
       component : ItemConfigComponent
    },
    {
        path: 'boxs',
        data : { breadcrumb : 'Box'},
        component : BoxsComponent
    },
    {
        path: 'price-group',
        data : { breadcrumb : 'Price Group'},
        component : PriceGroupComponent
    },
    {
        path: 'add-price-group',
        data : { breadcrumb : 'Add Price Group'},
        component : AddPriceGroupComponent
    },
    {
        path : 'pay-go-providers',
        data : { breadcrumb : 'Pay Go Providers'},
        component : PayGoProvidersComponent
    },
    {
        path : 'suppliers',
        data : { breadcrumb : 'Suppliers'},
        component : SuppliersComponent
    },
    {
        path: 'product-type',
        data : { breadcrumb : 'Product Config'},
        component : ProductTypeComponent
    },

];