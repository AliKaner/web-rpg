import { IUser } from "@/api/models/IUser";
import { createContext,useState,Dispatch,SetStateAction,useMemo,FC,ReactNode, useContext } from "react";
import { login,getMe,register } from "@/api/routes/session";
 
interface IUserContext {
    user:IUser|null;
    setUser:Dispatch<SetStateAction<IUser|null>>;
    onLogin: () => Promise<void>;
    onRegister: () => Promise<void>;
}
interface IUserProvider {
    children:ReactNode;
}

const UserContext = createContext<IUserContext>({} as IUserContext)

export const UserProvider:FC<IUserProvider>  = ({children}) => {
    const [user,setUser] = useState<IUser|null>(null);

    const onLogin = async () => {
        if(!user) return;

        const accessToken = await login(user);
        localStorage.setItem("access_token",accessToken)
        const _user = await getMe();
        setUser(_user);
    };

    const onRegister =  async () => {
        if(!user) return;

        const accessToken = await register(user);
        localStorage.setItem("access_token", accessToken);
        const _user = await getMe();
        setUser(_user);
    };

    const contextValue = useMemo(() => ({
        user,
        setUser,
        onLogin,
        onRegister,
    }),[user,setUser,onLogin,onRegister])

    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);