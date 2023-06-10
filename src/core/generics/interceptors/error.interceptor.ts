import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {map, Observable, of, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {SnotifyService} from "ng-snotify";
import {ValidationModel} from "../classes/validation-model";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private sno: SnotifyService) {}

  manageError(error: ValidationModel){
    // const keys = Object.keys(error.errors);
    // if(keys.length > 0){
    //   keys.forEach(key => {
    //     const errorMessage = `${key} : ${error.errors[key]}`
    //     this.sno.error(errorMessage)
    //   })
    //   return;
    // }
    // if(error.message && error.message != ''){
    //   this.sno.error(error.message)
    // }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.manageError(error.error)
        return of();
      }),
      map((response: any) => {
        const vm = response.body;
        if(vm && vm.success){
          console.log(vm);
          return response
        }
        if(vm && !vm.success && vm.errors && vm.errors.length > 0){
          vm.errors.forEach((error: string) => {
            this.sno.error(error);
          })
        }
        return response;
      })
    );
  }
}
