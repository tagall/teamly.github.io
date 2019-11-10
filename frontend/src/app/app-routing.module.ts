import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './component/home-page/home/home.component';
import {AdminComponent} from './component/home-page/admin/admin.component';
import {LogInComponent} from './component/login-page/log-in/log-in.component';
import {AuthGuard} from './guard/auth.guard';
import {Role} from './model/role';
import {WantJoinComponent} from './component/login-page/want-join/want-join.component';
import {AboutComponent} from './component/login-page/about/about.component';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {DealListComponent} from './component/deals/deal-list/deal-list.component';

const appRoutes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.Admin, Role.User, Role.Hr]},
    children:
      [
        {
          path: 'admin',
          component: AdminComponent,
          canActivate: [AuthGuard],
          data: {roles: [Role.Admin]},
        },
        {
          path: 'deal-list',
          component: DealListComponent,
          canActivate: [AuthGuard],
          data: {roles: [Role.Admin, Role.User, Role.Hr]},
        }
      ]
  },
  {
    path: 'login-page',
    component: LoginPageComponent,
    children: [
      {
        path: 'login',
        component: LogInComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'join',
        component: WantJoinComponent
      }
    ]
  },
  {
    path: '**', redirectTo: 'login-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
