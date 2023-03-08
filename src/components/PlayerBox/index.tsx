import { IPlayerBox } from "../../types/player.type";
import { FC } from "react";
import { IconButton, Heading, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Stat from "@/components/HeroCardStatElement";
import Image from "next/image";

export const PlayerBox: FC<IPlayerBox> = ({ player }) => {
  const levelUp = () => {
    //set level
  };

  return (
    <div className="playerBoxContainer">
      <div className="playerBoxHeader">
        <Heading size="md">{player?.character.name}</Heading>
      </div>
      <div>{/*<Image src={player?.img} alt={player?.character.name} />*/}</div>
      <div className="playerBoxStats">
        <div>
          {player?.character.level}
        </div>
      </div>
    </div>
  );
};
