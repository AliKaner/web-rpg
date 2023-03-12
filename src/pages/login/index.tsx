import { IUser } from "@/api/models/IUser";
import { getMe, login } from "@/api/routes/session";
import { InputArea } from "@/components/Input";
import { ChangeEvent, useState } from "react";
import { SubmitButton } from "@/components/SubmitButton";
import { LoginTitle } from "@/constants/constants";
import { useUser } from "@/contexts/user";
import { useRouter } from "next/router";

export default function Login() {

  const [user, setUser] = useState<IUser>({ password: "", username: ""});
  const  {onLogin} = useUser();
  const router = useRouter();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const onSubmit = async () => {
    await onLogin();
    router.push("/game");
  }
  
  return (
    <div className="page">
      Login
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
        <SubmitButton onSubmit={onSubmit} text={"submit"} />
      </div>
    </div>
  );
}
