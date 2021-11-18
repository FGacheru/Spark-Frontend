import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit {
  
  @Input()
  outline : boolean = false;

  @Input()
  text : string;

  @Output()
  action : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doAction(){
    this.action.emit();
  }

}
