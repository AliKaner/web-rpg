import { api } from "@/api";
import { IHero } from "@/api/models/IHero";

export const getHeros = async (): Promise<IHero[]> => {
  const response = await api.get("/heroes/all");
  return response.data;
};

export const addHero = (hero:string) =>{
  api.post("/heroes/add",hero)
}