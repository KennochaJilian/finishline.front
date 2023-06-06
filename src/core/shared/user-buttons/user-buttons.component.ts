import {Component, Input} from '@angular/core';
import {DepositAuthService} from "../../generics/services/http/deposit-auth.service";
import {Router} from "@angular/router";
import {SnotifyService} from "ng-snotify";
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {User} from "../models/user";

@Component({
  selector: 'app-user-buttons',
  templateUrl: './user-buttons.component.html',
  styleUrls: ['./user-buttons.component.scss']
})
export class UserButtonsComponent {
  @Input() currentUser?: User;
  logoutIcon = faRightFromBracket as IconProp;

  constructor(public authService: DepositAuthService,
              public router: Router,
              public sno: SnotifyService) {
  }

  logout(){
  }
}
