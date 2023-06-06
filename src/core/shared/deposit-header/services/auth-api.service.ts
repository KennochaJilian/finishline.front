import {Inject, Injectable} from "@angular/core";
import {Environment} from "../../../generics/classes/environment";
import {DepositHttpService} from "../../../generics/services/http/deposit-http.service";
import {Observable} from "rxjs";
import {ServiceGeneric} from "../../../generics/services/http/service-generic.service";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends ServiceGeneric {
  constructor(@Inject('env') protected override environment: Environment, http : DepositHttpService) {
    super(environment, http, 'Auth');
    this.baseUrl = `${this.environment.apiUrl}`;

  }
  register(user: any) : Observable<any>{
    const registerUrl = `${this.baseUrl}/register`
    return this.http.post(registerUrl, user)
  }

  signIn(connectionInformation: any) : Observable<any>{
    const connectionUrl = `${this.baseUrl}/login`
    return this.http.post(connectionUrl, connectionInformation)
  }
}
