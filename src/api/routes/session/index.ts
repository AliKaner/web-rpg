import { api } from "@/api";
import { IUser } from "@/api/models/IUser";
import { IGame } from "@/api/models/IGame";

export const register = async (user: IUser) => {
  const response = await api.post("/user/create", user);
  console.log(response);
  return response.data;
};
export const login = async (user: IUser) => {
  const response = await api.post("/user/login", user);
  return response.data;
};

export const getMe = async() => {
  const response = await api.get("/user/me");
  return response.data;
}
