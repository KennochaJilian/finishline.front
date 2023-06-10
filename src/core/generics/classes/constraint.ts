import {Sex} from "../enums/sex";

export class Constraint {
  name: string;
  minBirthDate: Date;
  maxBirthDate: Date;
  MaximumParticipant: number;
  sex: Sex
}
