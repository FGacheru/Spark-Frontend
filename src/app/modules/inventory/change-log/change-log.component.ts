import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html',
  styleUrls: ['./change-log.component.scss']
})
export class ChangeLogComponent implements OnInit {


  url : string = 'history/box_change_log'
  
  titles: any[] = [
     {
       title : 'PAYGO ID',
       field : 'pay_go_id'       
     },
     {
      title : 'SERIAL NUMBER',
      field : 'serial_number'       
    },
    {
      title : 'PAYGO ID',
      field : 'pay_go_id'       
    },
    {
      title : 'BOX TYPE',
      field : 'box_type'       
    },
    {
      title : 'CHECKIN DATE',
      field : 'checkin_date',
      date : true  
    },
    {
      title : 'CHECKIN WAREHOUSE',
      field : 'checking_warehouse'       
    },
    {
      title : 'CURRENT LOCATION',
      field : 'current_location'       
    },
    {
      title : 'SUPPLIER',
      field : 'supplier_name'       
    },
    {
      title : 'PO. NUMBER',
      field : 'po_number'       
    },
    {
      title : 'CAPACITY',
      field : 'capacity'       
    },
    {
      title : 'INVENTORY STATUS',
      field : 'inventory_status'       
    },
    {
      title : 'OWNERSHIP STATUS',
      field : 'ownership_status'       
    },
    {
      title : 'DESCRIPTION',
      field : 'description'       
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
