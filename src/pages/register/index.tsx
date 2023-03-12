import { api } from "@/api";
import { IUser } from "@/api/models/IUser";
import { register, getMe } from "@/api/routes/session";
import { InputArea } from "@/components/Input";
import { ChangeEvent, useState } from "react";
import { SubmitButton } from "@/components/SubmitButton";
import { SignInTitle } from "@/constants/constants";
import { Header } from "@/components/Header";
import { useUser } from "@/contexts/user";

export default function Register() {
  const  {onRegister} = useUser();
  const [user, setUser] = useState<IUser>({
    password: "",
    username: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  return (
    <div className="page">
      <Header title={SignInTitle}/>
      <div className="form">
        <InputArea
          value={user.username}
          onChange={handleOnChange}
          type={"username"}
        />
        <InputArea
          value={user.password}
          onChange={handleOnChange}
          type={"password"}
        />
        <SubmitButton onSubmit={onRegister} text={"submit"} />
      </div>
    </div>
  );
}
