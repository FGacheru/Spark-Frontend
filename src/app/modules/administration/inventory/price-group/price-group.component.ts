import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-group',
  templateUrl: './price-group.component.html',
  styleUrls: ['./price-group.component.scss']
})
export class PriceGroupComponent implements OnInit {


  url : string ='price-group-configs/'
    
  titles : object[] = [
    {
      title : 'DB ID',
      field : 'id'
    },
    {
      title : 'Name',
      field : 'name'
    },
    {
      title : 'Type',
      field : 'type'
    },   
    {
      title : 'Daily Rate',
      field : 'daily_rate'
    },
    {
      title : 'Number of Days',
      field : 'number_of_days'
    },
    {
      title : 'Min activation amount',
      field : 'min_activation_amount'
    },
    {
      title : 'Description',
      field : 'description'
    },
    {
      title : 'PayGo Provider Name',
      field : 'pay_go_provider_name'
    }
    
  ]
  
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  openAdd(){
    this._router.navigate(['/administration/inventory/add-price-group'])
  }

}
