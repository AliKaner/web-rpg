import { IStat } from "./IStat";
import { IDialog } from "./IDialog";

export interface IEnemy {
  img: string;
  name: string;
  stats: IStat;
  dialogSet: IDialog;
}
