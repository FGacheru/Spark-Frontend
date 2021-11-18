import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username: string = 'User';
  constructor(
    private _route: Router,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.username = this._authService.getUserProfile().username;
  }
  signOut() {
    this._authService.signOut();
  }


}
