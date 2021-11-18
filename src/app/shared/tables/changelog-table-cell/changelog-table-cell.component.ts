import { Component, Input, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { TableServiceService } from '../table-service.service';

@Component({
  selector: 'app-changelog-table-cell',
  templateUrl: './changelog-table-cell.component.html',
  styleUrls: ['./changelog-table-cell.component.scss']
})
export class ChangelogTableCellComponent implements OnInit {
  @Input()
  header:any;

  @Input()
  row: any;

  faDropDown = faCaretDown;
 
  constructor(
    private _tableService : TableServiceService,
    ) { }

  ngOnInit(): void {
   
  }

  cellValue(location : any): string{
    let source = this.header["field"];
    if(source == "id")return this.header["id"]
    let value = this.row[location][source]
    if( value != null && (value.trim() == "box_history.store.name" || value.trim() == "box.store.location.name")) value = "Nairobi"
    return value != null ? value.trim() : value
  }

  get isAction(): boolean{
   return this.header["action"] != undefined && this.header["action"] == true;
  }

  actionDropDown(event : any,action : string){
      event.preventDefault()
     this._tableService.doAction(action,this.row);
  }

  isObject(action:any){
    let type
    try{
       type = action["type"]
    }catch(e){
      return false;
    }

    return type != undefined;
  }
  

}
