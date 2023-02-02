import { IStat } from "api/models/IStat";

export interface ICharacter {
  name: string;
  gold: number;
  level: number;
  exp: number;
  stat: IStat;
}
