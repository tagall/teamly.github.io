import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { AuthenticationService } from '../../../service/authentication.service';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
  currentUser: User;
  userFromApi: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
    });
  }
}
