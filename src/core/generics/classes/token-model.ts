import {User} from "../../shared/models/user";

export class TokenModel{
  expiredAt: Date;
  token:string;
  user:User
}
