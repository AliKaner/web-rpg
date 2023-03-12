import { IStats} from "@/api/models/IStats";

export interface ICharacter {
  name: string;
  gold: number;
  level: number;
  exp: number;
  stat: IStats;
}
