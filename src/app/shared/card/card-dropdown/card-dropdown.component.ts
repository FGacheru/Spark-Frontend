import { Component, OnInit, Input,EventEmitter, Output  } from '@angular/core';
import { FormItemService } from 'src/app/services/forms/form-item.service';

@Component({
  selector: 'app-card-dropdown',
  templateUrl: './card-dropdown.component.html',
  styleUrls: ['../card.component.scss']
})
export class CardDropdownComponent implements OnInit {
  @Input('title') title: string = '';
  @Input() tabbed: boolean = false;
  @Input() tabbedItems: any;

  @Output()
  selectedTab$: EventEmitter<any> = new EventEmitter()

  constructor(
    private _formService: FormItemService
  ) { }

  ngOnInit(): void {
    console.log('IN CARD COMPONENT', this.tabbed);
  }

  selectedTab(value: string) {
    console.log('THE SELECTED TAB', value);
    this._formService.formDropdownSelectedTab(value);
  }

}
