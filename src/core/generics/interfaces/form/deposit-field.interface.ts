import {ValidatorFn} from "@angular/forms";
import {DepositFieldError} from "./deposit-field-error.interface";

export interface DepositField{
  name: string
  placeholder: string;
  required: boolean;
  helper?: string;
  controlErrors?:DepositFieldError[];
  validators ?: ValidatorFn[]
  type: 'text' | 'email' | 'password' | 'number' | 'date' | 'file' | 'tel' | 'textarea' | 'checkbox';

}
