export enum DialogType {
  Damage = 'DAMAGE',
  Death = 'DEATH',
  Greeting = 'GREETING',
}
export interface IDialog {
  type: DialogType;
  text: string;
}
