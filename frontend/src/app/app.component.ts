import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from './service/authentication.service';
import {User} from './model/user';
import {Role} from './model/role';


@Component({selector: 'app-root', templateUrl: 'app.component.html'})
export class AppComponent {
  title: 'Teamly';
  currentUser: User;
  adminChoices: any;

  constructor(private router: Router,
              public authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login-page/login']);
  }
}
