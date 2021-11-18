import { Component, Input, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { TableServiceService } from '../table-service.service';

@Component({
  selector: 'app-basic-table-cell',
  templateUrl: './basic-table-cell.component.html',
  styleUrls: ['./basic-table-cell.component.scss']
})
export class BasicTableCellComponent implements OnInit {

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

  get cellValue(): string{
    let source = this.header["field"];
    if (source.trim() == "" || source == undefined) return "null";

    const parts = source.split(".")

    let value = `\u2014`;
    let tempValue = this.row;
    for (let index in parts) {
      const key = parts[index]
      if(tempValue == null ) return "null";
      if (tempValue.hasOwnProperty(key)) {
        tempValue = tempValue[key]
        value = tempValue
      }
    }
    return value
  }

  get isAction(): boolean{
   return this.header["action"] != undefined && this.header["action"] == true;
  }

  get isCheckBox(): boolean {
    return this.header["select"] != undefined && this.header["select"] == true;
  }

  selectRow(event: any, action: string){
    event.preventDefault()
    this._tableService.doAction(action, this.row)
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
