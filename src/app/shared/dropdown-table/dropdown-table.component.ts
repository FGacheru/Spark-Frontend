import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FormItemService } from 'src/app/services/forms/form-item.service';

@Component({
  selector: 'app-dropdown-table',
  templateUrl: './dropdown-table.component.html',
  styleUrls: ['./dropdown-table.component.scss']
})
export class DropdownTableComponent implements OnInit {

  @Input()
  data : any;

  @Input()
  title: any;

  @Input()
  titles : any[] = [];

  history : any[]  = [];

  opened : Boolean  = false;
  faUp  = faCaretUp;
  faDown = faCaretDown;

  constructor(private _formService : FormItemService) {
    
 
  }

  ngOnInit(): void {
    this._formService.getDropdownValues(this.data.url).subscribe(
      response => {
         this.history = response.results
      },
      (err : HttpErrorResponse) => {

      }
    )

  }
  
  cellValue(source : any,row : any): string{
 
    if (source.trim() == "" || source == undefined) return "null";

    const parts = source.split(".")

    let value = `\u2014`;
    let tempValue = row;
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
 

  toggleShow(){
    this.opened = !this.opened
  }

}
