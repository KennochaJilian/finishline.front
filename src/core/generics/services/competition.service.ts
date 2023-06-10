import {ServiceGeneric} from "./http/service-generic.service";
import {Environment} from "../classes/environment";
import {DepositHttpService} from "./http/deposit-http.service";
import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService extends ServiceGeneric{
  override updateNotify = "La compétition a bien été mise à jour"
  override addNotify = "La compétition a bien été ajoutée"
  constructor(@Inject('env') protected override environment: Environment, http : DepositHttpService) {
    super(environment, http, 'Competitions');
  }
  getAllByUser(userId: string) {
    const params = { userId };
    return this.http.get(this.baseUrl, { params: params });
  }
}
