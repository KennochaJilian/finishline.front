import { Component } from '@angular/core';
import {faBars, faTimes, faPlay } from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {DepositAuthService} from "../../../generics/services/http/deposit-auth.service";

@Component({
  selector: 'app-header-responsive',
  templateUrl: './header-responsive.component.html',
  styleUrls: ['./header-responsive.component.scss']
})
export class HeaderResponsiveComponent {
  isMenuOpen: boolean = false;

  bars = faBars as IconProp;
  times = faTimes as IconProp
  play = faPlay as IconProp
  isConnected = false;
  constructor(public authService: DepositAuthService) {
    this.isConnected = this.authService.isConnected();
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
