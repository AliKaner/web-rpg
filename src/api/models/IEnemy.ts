import { IStats } from "./IStats";
import { IDialog } from "./IDialog";

export interface IEnemy {
  img: string;
  name: string;
  stats: IStats;
  dialogSet: IDialog;
}
