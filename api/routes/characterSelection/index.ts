import { api } from "api";
import { IHero } from "api/models/IHero";

export const heros = async (): Promise<IHero[]> => {
  const response = await api.get("/heroes/all");
  return response.data;
};
