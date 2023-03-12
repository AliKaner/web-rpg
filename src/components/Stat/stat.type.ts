import { TStatKeys } from "@/api/models/IStats";

export interface IStat {
    type:TStatKeys,
    amount: number,
}
