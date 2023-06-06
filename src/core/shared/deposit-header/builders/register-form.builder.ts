import {DepositFormBuilder} from "../../../generics/interfaces/form/deposit-form-builder.interface";
import {DepositField} from "../../../generics/interfaces/form/deposit-field.interface";
import {Validators} from "@angular/forms";

export class RegisterFormBuilder implements DepositFormBuilder {
  textAddBtnSubmit: string = "S'inscrire";
  optIn = true;

  build(): DepositField[] {
    return [{
      placeholder: "Email",
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
        placeholder: "Mot de passe",
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
      },
      {
        placeholder: "Confirmez le mot de passe",
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
        name: "password_confirmation"
      }
    ];
  }



}
