
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StatType } from "@/types/stat.type";
import StatElement from "@/components/HeroCardStatElement";
import { IHeroCard } from "./herocard.types";

const HeroCard: FC<IHeroCard> = ({hero ,onClick}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="heroCardContainer" onClick={onClick}>
      <Link href="/game">
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
        <div className="CheroardTitle">{hero.name}</div>
        <div className="heroCardStatContainer">
          <StatElement type={StatType.attack} amount={hero.stats.atk} />
          <StatElement type={StatType.defence} amount={hero.stats.def} />
          <StatElement type={StatType.health} amount={hero.stats.hp} />
        </div>
      </Link>
    </div>
  );
};
export default HeroCard;
