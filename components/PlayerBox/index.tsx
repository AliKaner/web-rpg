import { IPlayerBox } from "./IPlayerBox";
import { FC } from "react";
import {
  IconButton,
  Heading,
  Text,
  Grid,
  GridItem,
  Card,
  CardBody,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Stat from "components/StatElement";
import Image from "next/image";

export const PlayerBox: FC<IPlayerBox> = ({ player }) => {
  const levelUp = () => {
    //set level
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>
        <Heading size="md">{player?.character.name}</Heading>
        <Text>{player?.character.level}</Text>
      </div>
      <div>
        <Image src={player?.img} alt={player?.character.name} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}></div>
    </div>
  );
};
