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
      <div>
        <image />
      </div>
      <div></div>
    </div>
  );
};

export default EnemyBox;
