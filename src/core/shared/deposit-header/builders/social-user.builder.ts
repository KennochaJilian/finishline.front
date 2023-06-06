import {SocialUser} from "@abacritt/angularx-social-login";
import {DepositSocialUserInterface} from "../interfaces/deposit-social-user.interface";

export class SocialUserBuilder{
  public static buildUserFromSocialUser(user:SocialUser): DepositSocialUserInterface{
    return {
      email: user.email,
      tokenId: user.idToken
    }
  }
}
