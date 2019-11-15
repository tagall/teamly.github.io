import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogInComponent} from './component/login-page/log-in/log-in.component';
import {RegisterComponent} from './component/login-page/register/register.component';
import {AboutComponent} from './component/login-page/about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material';
import {WantJoinComponent} from './component/login-page/want-join/want-join.component';
import {DealDetailComponent} from './component/deals/deal-detail/deal-detail.component';
import {DealListComponent} from './component/deals/deal-list/deal-list.component';
import {AdminComponent} from './component/home-page/admin/admin.component';
import {HomeComponent} from './component/home-page/home/home.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './helper/jwt-interceptor.service';
import {ErrorInterceptor} from './helper/error-interceptor.service';
import {backendProvide} from './service/backend-interceptor.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginPageComponent} from './component/login-page/login-page.component';
import { MaterialElevationDirective } from './directive/material-elevation.directive';
import { DealCardComponent } from './component/deals/deal-card/deal-card.component';
import { DealCreateComponent } from './component/deals/deal-create/deal-create.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    AboutComponent,
    WantJoinComponent,
    DealDetailComponent,
    DealListComponent,
    AdminComponent,
    HomeComponent,
    LoginPageComponent,
    MaterialElevationDirective,
    DealCardComponent,
    DealCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule
  ],
  exports: [
    DealDetailComponent,
    DealCardComponent
  ],
  entryComponents: [DealDetailComponent],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    backendProvide,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
