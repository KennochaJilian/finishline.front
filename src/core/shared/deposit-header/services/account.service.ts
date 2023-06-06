import {ServiceGeneric} from "../../../generics/services/http/service-generic.service";
import {Inject, Injectable} from "@angular/core";
import {Environment} from "../../../generics/classes/environment";
import {DepositHttpService} from "../../../generics/services/http/deposit-http.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ServiceGeneric{
  override updateNotify = ""
  override addNotify = ""
  constructor(@Inject('env') protected override environment: Environment, http : DepositHttpService) {
    super(environment, http, 'account');
    this.baseUrl = `${this.environment.apiUrl}/account`;

  }

  resetPassword(email: any){
    const url = `${this.baseUrl}/password/reset`
    return this.http.post(url, email);
  }
  updatePassword(values: any){
    const url = `${this.baseUrl}/password/change`
    return this.http.post(url, values);
  }
}
