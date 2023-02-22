import { IHero } from "@/api/models/IHero";
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
import Stat from "@/components/StatElement";
import { GiBroadsword, GiAbdominalArmor, GiHeartPlus } from "react-icons/gi";
import { stat } from "fs";
import Link from "next/link";
import { StatType } from "@/types/stat.type";
import StatElement from "@/components/StatElement";

const HeroCard: FC<IHero> = ({ name, stats, img, desc }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
      <div className="heroCardContainer">
         <Link href="/game">
        <Box alignContent={"center"}>
          <Image src={img} alt={name} borderRadius={"xl"} />
        </Box>
        <Text textAlign={"center"}>{name}</Text>
        <StackItem>
          <StatElement type={StatType.attack} amount={stats.atk} />
          <StatElement type={StatType.defence} amount={stats.def} />
          <StatElement type={StatType.healt} amount={stats.hp} />
        </StackItem>
        </Link>
      </div>
  );
};
export default HeroCard;
