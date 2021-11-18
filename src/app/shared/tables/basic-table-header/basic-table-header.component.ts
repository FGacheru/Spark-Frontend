import { Component, Input, OnInit } from '@angular/core';
import {  faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { TableServiceService } from '../table-service.service';

@Component({
  selector: 'app-basic-table-header',
  templateUrl: './basic-table-header.component.html',
  styleUrls: ['./basic-table-header.component.scss']
})
export class BasicTableHeaderComponent implements OnInit {

  faIcon = faCalendarAlt;
  
  @Input()
  header : any;

  @Input()
  filters : any;

  filterValue : string = "";

  @Input()
  headerfull : boolean = false;
  
  constructor(private _tableService : TableServiceService) {
    
   }

  ngOnInit(): void {
    
    this.filterValue = this.filters.filter( ( item : any) => item["field"] == this.header["field"])["value"];
  }

  get normalCell(){
    return this.header["date"] == undefined 
    && this.header["actions"] == undefined
    && this.header['calculated'] == undefined;
  }

  get isDate(){
    return this.header["date"] != undefined;
  } 

  filter(){
    this._tableService.getJoinedFilters({ field : this.header["field"], value : this.filterValue});
  }
  

}
