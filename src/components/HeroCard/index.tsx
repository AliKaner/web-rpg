import { IHero } from "@/api/models/IHero";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StatType } from "@/types/stat.type";
import StatElement from "@/components/StatElement";

const HeroCard: FC<IHero> = ({ name, stats, img, desc }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
      <div className="heroCardContainer">
         <Link href="/game">
        <div className="heroCardImg" >
          <Image
          src={img}
          alt={name}
          sizes="40vw"
          width={'0'}
          height={'0'}
          style ={{width:'100%',height: 'auto'}}
            />
        </div>
        <div className="CheroardTitle">
          {name}
        </div>
        <div className="heroCardStatContainer">
          <StatElement type={StatType.attack} amount={stats.atk} />
          <StatElement type={StatType.defence} amount={stats.def} />
          <StatElement type={StatType.healt} amount={stats.hp} />
        </div>
        </Link>
      </div>
  );
};
export default HeroCard;
