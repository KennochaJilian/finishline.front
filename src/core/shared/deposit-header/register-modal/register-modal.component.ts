import {Component} from '@angular/core';
import { RegisterFormBuilder } from '../builders/register-form.builder';
import { AuthApiService } from '../services/auth-api.service';
import { DepositAuthService } from '../../../generics/services/http/deposit-auth.service';
import { Router } from '@angular/router';
import {TokenModel} from "../../../generics/classes/token-model";

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent {
  registerModal = false;

  constructor(
    public authApiService: AuthApiService,
    private authService: DepositAuthService,
    public registerFormBuilder: RegisterFormBuilder,
    private router: Router,
  ) {}
    private manageConnection(res: TokenModel): void {
    console.log(res);
    this.authService.setToken(res.token, res.expiredAt);
    // this.router.navigate(['dashboard/home']);
  }

  onRegisterSubmit(user: any): void {
    this.authApiService.register(user).subscribe( {
      next: (res) => {
        this.manageConnection(res.object)
      }
    })
  }
}
