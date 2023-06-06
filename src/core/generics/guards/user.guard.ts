import {CanActivate, Router, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {DepositAuthService} from "../services/http/deposit-auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(public router: Router, public authService:DepositAuthService) {
  }

  canActivate(): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    const token = this.authService.getToken()
    if(token){
      return true
    }
    return this.router.navigate(['/'])
  }

}
