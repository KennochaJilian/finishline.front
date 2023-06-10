import { NgModule } from '@angular/core';
import { DepositHeaderComponent } from './deposit-header/deposit-header.component';
import { DepositFooterComponent } from './deposit-footer/deposit-footer.component';
import {GenericsModule} from "../generics/generic.module";
import {ConnectionFormBuilder} from "./deposit-header/builders/connection-form.builder";
import {RegisterFormBuilder} from "./deposit-header/builders/register-form.builder";
import { RegisterModalComponent } from './deposit-header/register-modal/register-modal.component';
import { ConnectionModalComponent } from './deposit-header/connection-modal/connection-modal.component';
import { RouterModule } from '@angular/router';
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ResetPasswordFormBuilder} from "./deposit-header/builders/reset-password-form.builder";
import {HeaderResponsiveComponent} from "./deposit-header/header-responsive/header-responsive.component";
import {UserButtonsComponent} from "./user-buttons/user-buttons.component";
import { CompetitionTableComponent } from './competition-table/competition-table.component';


@NgModule({
  declarations: [
    DepositHeaderComponent,
    DepositFooterComponent,
    RegisterModalComponent,
    ConnectionModalComponent,
    HeaderResponsiveComponent,
    UserButtonsComponent,
    CompetitionTableComponent
  ],
  imports: [
    GenericsModule,
    RouterModule,
    NgIf,
    NgClass,
    FontAwesomeModule,
    DatePipe,
    NgForOf,
  ],
  providers: [
    ConnectionFormBuilder,
    RegisterFormBuilder,
    ResetPasswordFormBuilder,
  ],
  exports: [
    DepositHeaderComponent,
    DepositFooterComponent,
    RegisterModalComponent,
    ConnectionModalComponent,
    CompetitionTableComponent,
  ],
  bootstrap: []
})
export class SharedModule { }
