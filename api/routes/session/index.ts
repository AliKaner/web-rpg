import { api } from "api";
import { IUser } from "api/models/IUser";

export const register = async (user: IUser) => {
  const response = await api.post("/user/register", user);
  return response.data;
};
export const login = async (user: IUser) => {
  const response = await api.post("/user/login", user);
  return response.data;
};
