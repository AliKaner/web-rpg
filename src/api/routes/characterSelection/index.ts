import { api } from "@/api";
import { IHero } from "@/api/models/IHero";

export const getHeros = async (): Promise<IHero[]> => {
  const response = await api.get("/hero/all");
  return response.data;
};

export const addHero = (heroID:string,accessToken?: string|null) => {
  api.put("/hero/select", {
    'heroID':heroID,
    'Authorization':accessToken
  });
};
