import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {map, Observable, of, tap} from "rxjs";
import {UserService} from "../../../app/dashboard/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(public router: Router, public userService:UserService) {
  }

  canActivate(): Observable<boolean> {
    return this.userService.me().pipe(
      map(res => res.is_admin),
      tap(isAdmin => {
        if (!isAdmin) {
          this.router.navigate(['/']);
        }
      })
    );
  }

}
