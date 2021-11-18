import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  opened : Boolean  = false;
  faUp  = faCaretUp;
  faDown = faCaretDown;

  summary  : any = {
    title : 'SUMMARY',
    url : '',
    fields : [
      {
        name : 'NAME',
        field : 'name'
      },
      {
        name : 'STATUS',
        field : 'status'
      },
      {
        name : 'SALES INFO',
        field : 'store'
      },
      {
        name : 'PRODUCT',
        field : 'product'
      },
  
    ]
  };


  payments  : any = {
    title : 'PAYMENTS',
    url : '',
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
    title : 'REPAIRS/REPLACEMENTS/EXCHANGES',
    url : '',
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
    title : 'REFERRALS',
    url : '',
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
    title : 'SUPPORT',
    url : '',
    fields : [
      {
        name : 'DATE',
        field : 'created_at'
      },
      {
        name : 'STORE',
        field : 'store.name'
      },
      {
        name : 'STORE TYPE',
        field : 'store.type'
      },
      {
        name : 'MOVED BY',
        field : 'created_by.full_name'
      },
      {
        name : 'DESCRIPTION',
        field : 'description'
      }
    ]
  };

  outstanding  : any = {
    title : 'OUTSTANDING ITEMS',
    url : '',
    fields : [
      {
        name : 'ITEM DESCRIPTION',
        field : 'created_at'
      },
      {
        name : 'ITEM SERIAL NUMBER',
        field : 'store.name'
      },
      {
        name : 'DATE ',
        field : 'store.type'
      },
      {
        name : 'AMOUNT PAID',
        field : 'created_by.full_name'
      },
      {
        name : 'DESCRIPTION',
        field : 'description'
      }
    ]
  };

  constructor(private _route : ActivatedRoute) { 

    let id = this._route.snapshot.paramMap.get('id');
    this.summary.url = `customers/customer/info/${id}`;
    this.payments.url = `customers/customer/payment/${id}`;
  }

  ngOnInit(): void {
  }

  toggleShow(){
    this.opened = !this.opened
  }

}
