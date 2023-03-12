
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IHeroCard } from "./herocard.types";

const HeroCard: FC<IHeroCard> = ({hero ,onClick}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="heroCard" onClick={onClick}>
        <div className="heroCardImg">
          <Image
            src={hero.img}
            alt={hero.name}
            sizes="40vw"
            width={"0"}
            height={"0"}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="heroCardHeader">{hero.name}</div>
        <div className="heroCardStats">
        </div>
    </div>
  );
};
export default HeroCard;
