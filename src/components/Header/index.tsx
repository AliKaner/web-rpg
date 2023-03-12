import {FC} from "react";
import { IHeader } from "./header.type";


export const Header: FC<IHeader> = ({
    title
}) => {
    return ( 
        <div className="header">
        {
            title
        }
        </div>
    );
}
