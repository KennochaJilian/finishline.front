import {Competition} from "./competition";
import {Constraint} from "./constraint";

export class Event {
  title: string;
  description:string;
  startDate: Date;
  competition: Competition;
  constraints : Constraint[]
}
