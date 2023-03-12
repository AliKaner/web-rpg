import {FC} from "react";
import { IAdminPanel } from "./adminPanel.type";


export const AdminPanel:FC<IAdminPanel> = ({

}) => {
    return(
        <div className="page">
            
            <div className="adminPanel">
                <div className="adminPanelSideBar">

                </div>
                <div className="adminPanelContent">

                </div>
            </div>
        </div>
    );
}
