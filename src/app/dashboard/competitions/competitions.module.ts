import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {CompetitionsComponent} from "./competitions.component";
import {CompetitionService} from "../../../core/generics/services/competition.service";
import {SharedModule} from "../../../core/shared/shared.module";
import {JsonPipe, NgIf} from "@angular/common";


const routes: Route[] = [
  { path: '', component: CompetitionsComponent}
];
@NgModule({
  declarations: [
    CompetitionsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    NgIf,
    JsonPipe,
  ],
  providers: [
    CompetitionService
  ],
  exports: [],
  bootstrap: []
})
export class CompetitionsModule { }
