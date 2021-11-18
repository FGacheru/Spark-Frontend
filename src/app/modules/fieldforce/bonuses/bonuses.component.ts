import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.scss']
})
export class BonusesComponent implements OnInit {

  summary  : any = {
    title : 'SALES REPRESENTATIVES',
    url : 'fieldforce/',
    fields : [
      {
        name : 'NAME',
        field : 'full_name'
      },
      {
        name : 'MONTH',
        field : 'month'
      },
      {
        name : 'BONUS EARNING',
        field : 'bonus_earning'
      },
      {
        name : 'BONUS DISCRETIONARY',
        field : 'bonus_discretionary'
      },
      {
       
        title : "Actions",
        field : "",
        action: true,
        actions: [
          "ADD DISCRETIONARY BONUS",
        ]
      }

    ]
  };


  payments  : any = {
    title : 'TEAM LEADER',
    url : 'fieldforce/',
    fields : [
      {
        name : 'DATE',
        field : 'effective_date'
      },
      {
        name : 'AMOUNT',
        field : 'amount'
      },
      {
        name : 'PHONE NUMBER',
        field : 'msisdn'
      },
      {
        name : 'TOKEN',
        field : 'qid'
      }
    ]
  };


  repairs  : any = {
    title : 'STOREKEEPER',
    url : 'fieldforce/',
    fields : [
      {
        name : 'DATE',
        field : 'created_at'
      },
      {
        name : 'REPAIR RECORD',
        field : 'store.name'
      },
      {
        name : 'ITEM TYPE',
        field : 'store.type'
      },
      {
        name : 'ITEM SERIAL NO',
        field : 'created_by.full_name'
      },
      {
        name : 'FAULT DESCRIPTION',
        field : 'description'
      },
      {
        name : 'REPAIR DESCRIPTION',
        field : 'description'
      },
      {
        name : 'RESOLUTION DATE',
        field : 'description'
      }
    ]
  };

  referrals  : any = {
    title : 'INSTALLER',
    url : 'fieldforce/',
    fields : [
      {
        name : 'CUSTOMER NAME',
        field : 'created_at'
      },
      {
        name : 'CUSTOMER NUMBER',
        field : 'store.name'
      },
      {
        name : 'CUSTOMER PHONE NUMBER',
        field : 'store.type'
      },
      {
        name : 'DATE OF REFERRAL',
        field : 'created_by.full_name'
      },
      {
        name : 'DATE OF REGISTRATION',
        field : 'description'
      },
      {
        name : 'REFERRAL BONUS VALUE',
        field : 'description'
      },
      {
        name : 'PAID OUT AS',
        field : 'description'
      }
    ]
  };



  support  : any = {
    title : 'INSTALLER',
    url : 'fieldforce/',
    fields : [
      {
        name : 'CUSTOMER NAME',
        field : 'created_at'
      },
      {
        name : 'CUSTOMER NUMBER',
        field : 'store.name'
      },
      {
        name : 'CUSTOMER PHONE NUMBER',
        field : 'store.type'
      },
      {
        name : 'DATE OF REFERRAL',
        field : 'created_by.full_name'
      },
      {
        name : 'DATE OF REGISTRATION',
        field : 'description'
      },
      {
        name : 'REFERRAL BONUS VALUE',
        field : 'description'
      },
      {
        name : 'PAID OUT AS',
        field : 'description'
      }
    ]
  };



  constructor(private _route : ActivatedRoute) { 

    let id = this._route.snapshot.paramMap.get('id');
    // this.summary.url = `customers/customer/info/${id}`;
    // this.payments.url = `customers/customer/payment/${id}`;
  }

  ngOnInit(): void {
  }

}
