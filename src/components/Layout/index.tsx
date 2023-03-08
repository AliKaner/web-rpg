import { ILayout } from "./types";

export const Layout: React.FC<ILayout> = ({
    children,
}) => {
    return (
        <div className="page">
            {children}
        </div>
    )
}