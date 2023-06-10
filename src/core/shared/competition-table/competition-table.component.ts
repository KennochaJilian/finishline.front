import {Component, Input} from '@angular/core';
import {Competition} from "../../generics/classes/competition";

@Component({
  selector: 'app-competition-table',
  templateUrl: './competition-table.component.html',
  styleUrls: ['./competition-table.component.scss']
})
export class CompetitionTableComponent {
  @Input() competitions: Competition[]

}
