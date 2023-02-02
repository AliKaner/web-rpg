import { Card, CardBody, Image, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";
import Stat from "components/StatElement";
import { IEnemyBox } from "./IEnemyBox";
import { GiBroadsword, GiAbdominalArmor, GiHeartPlus } from "react-icons/gi";
import StatElement from "components/StatElement";
import { StatType } from "components/StatElement/IStatElement";

const EnemyBox: FC<IEnemyBox> = ({ enemy }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <image />
      </div>
      <div></div>
    </div>
  );
};

export default EnemyBox;
