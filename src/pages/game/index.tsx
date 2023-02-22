import { Grid, GridItem, Flex } from "@chakra-ui/layout";
import { IEnemy } from "@/api/models/IEnemy";
import { PlayerBox } from "@/components/PlayerBox";
import EnemyBox from "@/components/EnemyBox";
import { IEnemyBox } from "@/types/enemy.type";
import { StoryBox } from "@/components/StoryWindow";
import { IStoryBox } from "@/types/story.type";
import { useState } from "react";
import { IPlayer } from "@/api/models/IPlayer";

const TextData: IStoryBox = {
  texts: ["lorem 10", "matik", "lorem 10", "matik", "lorem 10", "matik"],
};

export default function Game() {
  const [currentEnemy, setCurrentEnemy] = useState<IEnemy>();
  const [player, setPlayer] = useState<IPlayer>();
  const [story, setStory] = useState<string[]>([]);
  return (
    <div className="game page">
      <div className="enemyContainer flexOne">
        <EnemyBox enemy={currentEnemy} />
      </div>
      <div className="storyContainer flexThree">
        <StoryBox texts={story} />
      </div>
      <div className="playerContaine FlexOne">
        <PlayerBox player={player} />
      </div>
    </div>
  );
}
