export interface IStats {
  hp: number;
  def: number;
  atk: number;
}

export type TStatKeys = keyof IStats;