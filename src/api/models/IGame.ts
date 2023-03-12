import { IEnemy } from "./IEnemy";
import { IStats } from "./IStats";

export interface IGame {
  story: string[];
  level: number;
  stats: IStats;
  enemy: IEnemy;
  gold: number;
  lvlPoint: number;
}
