import { api } from "@/api";
import { IUser } from "@/api/models/IUser";

export const register = async (user: IUser):Promise<string>  => {
  const response = await api.post("/user/create", user);
  console.log(response);
  return response.data;
};
export const login = async (user: IUser) => {
  const response = await api.post("/user/login", user);
  return response.data;
};

export const getMe = async(accessToken: string) => {
  const response = await api.get("/user/me",{headers:{
    'Authorization': accessToken 
  }})
  return response.data;
}
