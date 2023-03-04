import { Card, CardBody, Image, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";
import Stat from "@/components/StatElement";
import { IEnemyBox } from "../../types/enemy.type";
import { GiBroadsword, GiAbdominalArmor, GiHeartPlus } from "react-icons/gi";
import StatElement from "@/components/StatElement";
import { StatType } from "@/types/stat.type";

const EnemyBox: FC<IEnemyBox> = ({ enemy }) => {
  return (
    <div className="enemyBoxContainer">
      <div className="title">
        Enemy
      </div>
      <Image
        src="https://i0.wp.com/dmdavid.com/wp-content/uploads/2022/07/gem_stalker.jpeg"
        alt={enemy?.name}
        width={"90%"}
        height={"0"}
        style={{ width: "100%", height: "auto" }}
        />
      <p className="enemyBoxEnemyName">
        Katık Canavarı
      </p>
      <p className="enemyBoxEnemyDescription">
        Bu canavar çok fenadır duy da inanma
      </p>
      <div className="enemyBoxEnemyStats">
        <StatElement type={StatType.attack} amount={12} />
        <StatElement type={StatType.defence} amount={12} />
        <StatElement type={StatType.health} amount={12} />
      </div>
    </div>
  );
};

export default EnemyBox;
