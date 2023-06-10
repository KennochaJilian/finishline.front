import { NgModule } from '@angular/core';
import {DashboardHomeComponent} from "./dashboard-home.component";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  { path: '', component: DashboardHomeComponent},
];
@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [
  ],
  exports: [],
  bootstrap: []
})
export class DashboardHomeModule { }
