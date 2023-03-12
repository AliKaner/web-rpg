import { IHero } from "./IHero";

export interface IUser {
  username: string;
  password: string;
  hero?:IHero;
}
