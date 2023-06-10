import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Route, RouterModule, RouterOutlet} from "@angular/router";
import {SnotifyModule, SnotifyService, ToastDefaults} from "ng-snotify";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DepositTokenCrsfInterceptor} from "../core/generics/interceptors/deposit-crsf.interceptor";
import {ErrorInterceptor} from "../core/generics/interceptors/error.interceptor";
import {environment} from "../environments/environment";
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

registerLocaleData(localeFr);

const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterOutlet,
    SnotifyModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: "top"}),
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    SnotifyService,
    {
      provide: 'env',
      useValue: environment
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
