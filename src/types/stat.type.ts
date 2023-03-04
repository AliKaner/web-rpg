export enum StatType {
    attack = 'ATTACK',
    defence = 'DEFENCE',
    health = 'HEALT',
}

export interface IStatElement {
    type: StatType,
    amount:number,
}