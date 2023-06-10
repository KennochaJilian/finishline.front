import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../../core/generics/services/competition.service";
import {Competition} from "../../../core/generics/classes/competition";
import {DepositAuthService} from "../../../core/generics/services/http/deposit-auth.service";

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit{
  competitions: Competition[]
  constructor(public service: CompetitionService, public authService:DepositAuthService) {
  }
  ngOnInit() {
    const userId = this.authService.getUser()?.id;
    console.log(userId)
    if(userId){
      this.service.getAllByUser(userId).subscribe({
        next: (res:any) => {
          this.competitions = res
        }
      })
    }
  }
}
