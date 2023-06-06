import {DepositFormBuilder} from "../../../generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class ConnectionFormBuilder implements DepositFormBuilder{
  textAddBtnSubmit: string = "Se connecter";

  build(): DepositField[] {
    return [{
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
    },
      {
        placeholder: "mot de passe",
        type:  "password",
        required: true,
        validators: [
          Validators.required
        ],
        controlErrors: [
          {
            name: 'password',
            display: 'Le mot de passe est requis'
          }
        ],
        name: "password"
      }


    ];
  }

}
