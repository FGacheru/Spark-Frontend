import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-history',
  templateUrl: './box-history.component.html',
  styleUrls: ['./box-history.component.scss']
})
export class BoxHistoryComponent implements OnInit {

  parameter  : any = {
    title : 'STORES',
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

  constructor(private _route : ActivatedRoute) {
    let id = this._route.snapshot.paramMap.get('id');
    this.parameter.url = `history/box_history?box__id=${id}`;
   }

  ngOnInit(): void {
  }

}
