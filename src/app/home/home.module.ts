import {HomeComponent} from "./home.component";
import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SharedModule} from "../../core/shared/shared.module";
import {AuthApiService} from "../../core/shared/deposit-header/services/auth-api.service";
import {DepositAuthService} from "../../core/generics/services/http/deposit-auth.service";

const routes: Route[] = [
  { path: '', component: HomeComponent},
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,

  ],
  providers: [
    AuthApiService,
    DepositAuthService,
  ]
})
export class HomeModule { }
