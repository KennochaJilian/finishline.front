import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {Environment} from "../../classes/environment";
import {from, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepositHttpService extends HttpClient {

  patchHeaders: HttpHeaders;
  patchOptions: any;

  constructor(@Inject('env') protected environment: Environment, handler: HttpHandler, protected router: Router) {
    super(handler);
    this.patchHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.patchOptions = { headers: this.patchHeaders, withCredentials: true, responseType: 'json', observe: 'body' };
  }


  setHeaders(objectToSetHeadersTo: Request | any) {
    objectToSetHeadersTo.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    objectToSetHeadersTo.headers.set('Current-culture', navigator.language);
    objectToSetHeadersTo.headers.set('Current-tz-offset', new Date().getTimezoneOffset());
    objectToSetHeadersTo.headers.set('Current-tz-timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
}
