import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  public version = VERSION;
  constructor() { }

  ngOnInit(): void { }
}
