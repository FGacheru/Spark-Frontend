import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collect-at-store-reposses',
  templateUrl: './collect-at-store-reposses.component.html',
  styleUrls: ['./collect-at-store-reposses.component.scss']
})
export class CollectAtStoreRepossesComponent implements OnInit {

  faSearch = faSearch;
  constructor() { }

  boxes : any[] = [
    {
      name : "Battery Box",
      items : [
        {
          name : "12v Battery",
          present : false,
          condition : 2,
          description : ""
        },
        {
          name : "Lamp",
          present : true,
          condition : 1,
          description : ""
        }  
      ]
    },
    {
      name : "TV Box",
      items : [
        {
          name : "24' TV",
          present : true,
          condition : 1,
          description : ""
        },
        {
          name : "Antenna",
          present : true,
          condition : 2,
          description : ""
        }  
      ]
    },

  ];

  conditions : any[] = [
    {
      name : "Good",
      id : 1 
    },
    {
      name : "Damaged",
      id : 2
    }
  ];

  ngOnInit() {
  }
}
