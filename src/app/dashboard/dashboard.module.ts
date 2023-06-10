import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../../core/shared/shared.module";

const routes: Route[] = [
  { path: '', component: DashboardComponent,
    children: [
      { path: 'home',
        loadChildren: () => import('./dashboard-home/dashboard-home.module').then((x) => x.DashboardHomeModule)
      },
      {
        path: 'competitions',
        loadChildren: () => import('./competitions/competitions.module').then((x) => x.CompetitionsModule)
      }
    ]}
];
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
  ],
  exports: [],
  bootstrap: []
})
export class DashboardModule { }
