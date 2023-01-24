import { IEnemy } from "./IEnemy";
import { IStat } from "./IStat";

export interface IGame {
  story: string[];
  level: number;
  stats: IStat;
  enemy: IEnemy;
  gold: number;
  lvlPoint: number;
}
