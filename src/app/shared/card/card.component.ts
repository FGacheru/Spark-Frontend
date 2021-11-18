import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('title') title: string = '';
  @Input() tabbed: boolean = false;
  @Input() tabbedItems: any;

  constructor() { }

  ngOnInit(): void {
  }

}
