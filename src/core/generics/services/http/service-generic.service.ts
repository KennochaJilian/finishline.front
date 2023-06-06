import {SnotifyService} from "ng-snotify";
import {DepositHttpService} from "./deposit-http.service";
import {IServiceGeneric} from "../../interfaces/service.generic.interface";
import {Inject, Injectable} from "@angular/core";
import {map, Observable, Subject} from "rxjs";
import {Environment} from "../../classes/environment";

export class ServiceGeneric implements IServiceGeneric {

  protected baseUrl:string;
   constructor(
     @Inject('env') protected environment: Environment,
     protected http: DepositHttpService,
     entityName: string
   ) {
     this.baseUrl = `${this.environment.apiUrl}/v1/${entityName}`;
  }

  updateNotify: string = '';
   addNotify: string = '';
  updateRequested = new Subject();
  read(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  list(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
