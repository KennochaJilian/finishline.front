import {Component, OnInit} from '@angular/core';
import {DepositAuthService} from "../../generics/services/http/deposit-auth.service";

@Component({
  selector: 'app-deposit-header',
  templateUrl: './deposit-header.component.html',
  styleUrls: ['./deposit-header.component.scss']
})
export class DepositHeaderComponent implements OnInit {
  isConnected = false;
  constructor(public authService: DepositAuthService) {
    this.isConnected = this.authService.isConnected();
  }

  ngOnInit(): void {
    this.authService.logout$.subscribe({
      next: () => this.isConnected = this.authService.isConnected()
    })
  }
}
