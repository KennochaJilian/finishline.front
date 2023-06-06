import {DepositFormBuilder} from "../../../generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class ResetPasswordFormBuilder implements DepositFormBuilder{
  textAddBtnSubmit: string = "Réinitialiser mon mot de passe";

  build(): DepositField[] {
    return [
      {
        placeholder: "email",
        type:  "text",
        required: true,
        validators: [
          Validators.required,
          Validators.email,
        ],
        controlErrors: [
          {
            name: 'email',
            display: "L'email est requis"
          }
        ],
        name: "email"
      }
    ];
  }

}
