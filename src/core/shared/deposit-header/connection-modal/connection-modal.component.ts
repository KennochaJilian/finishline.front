import {Component, OnDestroy} from '@angular/core';
import {AuthApiService} from "../services/auth-api.service";
import {DepositAuthService} from "../../../generics/services/http/deposit-auth.service";
import {ConnectionFormBuilder} from "../builders/connection-form.builder";
import {Router} from "@angular/router";
import {AccountService} from "../services/account.service";
import {SnotifyService} from "ng-snotify";
import {TokenModel} from "../../../generics/classes/token-model";

@Component({
  selector: 'app-connection-modal',
  templateUrl: './connection-modal.component.html',
  styleUrls: ['./connection-modal.component.scss']
})
export class ConnectionModalComponent {
  connectionModal = false;
  resetModal = false;
  constructor(public authApiService: AuthApiService,
              public authService: DepositAuthService,
              public connectionFormBuilder: ConnectionFormBuilder,
              public router: Router,
              private accountService: AccountService,
              public sno: SnotifyService,
  ) {
  }

  private manageConnection(res: TokenModel){
    this.authService.setToken(res.token, res.expiredAt)
    this.authService.setUser(res.user);
    this.router.navigate(['dashboard/home'])
  }
  onConnectionSubmit(user: any){
    this.authApiService.signIn(user).subscribe({
      next: (res) => this.manageConnection(res.object)
    })
  }
}
