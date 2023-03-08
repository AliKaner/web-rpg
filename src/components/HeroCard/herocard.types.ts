import { IHero } from "@/api/models/IHero";

export interface IHeroCard {
    hero:IHero,
    onClick: () => void;
}