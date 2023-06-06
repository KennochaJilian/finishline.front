import {DepositField} from "../../interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class OptInFormBuilder{
  public static build() : DepositField{
    return {
      placeholder: `J'accepte <a href="/pages/politique-confidentialite">la politique de confidentialité </a> de Depos'It`,
      name: "rgpd",
      required: true,
      type: "checkbox",
      validators: [
        Validators.requiredTrue
      ],
      controlErrors: [
        {
          name: "rgpd",
          display: "Vous devez accepter la politique de confidentialité"
        }
      ]
    }
  }
}
