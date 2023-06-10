import { Inject, Injectable } from '@angular/core';
import {Token} from "../../interfaces/token.interface";
import {AuthApiService} from "../../../shared/deposit-header/services/auth-api.service";
import {Observable, Subject} from "rxjs";
import {User} from "../../../shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class DepositAuthService {
  constructor(@Inject('env') private env: any, private apiService: AuthApiService) {
  }
  public logout$ = new Subject();

  public isConnected() : boolean {
    return this.getToken() != null
  }
  public getToken(): Token | null{
    const token = this.getTokenFromStorage();
    if(token == null || Date.parse(token.expiredAt) < Date.now()){
      localStorage.removeItem('token')
      return null;
    }
    return token;
  }


  private getTokenFromStorage(): Token | null {
    const token = localStorage.getItem('token');
    if(token){
      return JSON.parse(token)
    }
    return null
  }
  public setToken(accessToken: string, expiredAt:Date){
    const token = {accessToken, expiredAt}
    localStorage.setItem('token', JSON.stringify(token));
  }
  public setUser(user: User){
    localStorage.setItem('user', JSON.stringify(user));
  }
  public getUser(): User | null{
    const user = localStorage.getItem('user');
    if(user){
      return JSON.parse(user);
    }
    return null
  }
  public removeToken(){
    localStorage.removeItem('token')
  }

}
