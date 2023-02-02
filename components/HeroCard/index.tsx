import { IHero } from "api/models/IHero";
import { FC, useState } from "react";
import {
  GridItem,
  Box,
  Image,
  Text,
  Stack,
  StackItem,
  background,
} from "@chakra-ui/react";
import Stat from "components/StatElement";
import { GiBroadsword, GiAbdominalArmor, GiHeartPlus } from "react-icons/gi";
import { stat } from "fs";
import Link from "next/link";
import { StatType } from "components/StatElement/IStatElement";
import StatElement from "components/StatElement";

const HeroCard: FC<IHero> = ({ name, stats, img, desc }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link href="/game">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px #778da9 solid",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "20px",
          padding: "10px",
          backgroundColor: "#415a77",
        }}
      >
        <Box alignContent={"center"}>
          <Image src={img} alt={name} borderRadius={"xl"} />
        </Box>
        <Text textAlign={"center"}>{name}</Text>
        <StackItem>
          <StatElement type={StatType.attack} amount={stats.atk} />
          <StatElement type={StatType.defence} amount={stats.def} />
          <StatElement type={StatType.healt} amount={stats.hp} />
        </StackItem>
      </div>
    </Link>
  );
};
export default HeroCard;
