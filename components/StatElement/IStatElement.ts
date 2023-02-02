export enum StatType {
    attack = 'ATTACK',
    defence = 'DEFENCE',
    healt = 'HEALT',
}

export interface IStatElement {
    type: StatType,
    amount:number,
}