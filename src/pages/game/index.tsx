import { Grid, GridItem, Flex } from "@chakra-ui/layout";
import { IEnemy } from "@/api/models/IEnemy";
import { PlayerBox } from "@/components/PlayerBox";
import EnemyBox from "@/components/EnemyBox";
import { IEnemyBox } from "@/types/enemy.type";
import { StoryBox } from "@/components/StoryWindow";
import { IStoryBox } from "@/types/story.type";
import { useState } from "react";
import { IPlayer } from "@/api/models/IPlayer";
import { Button } from "@chakra-ui/react";

const TextData: IStoryBox = {
  texts: ["lorem 10", "matik", "lorem 10", "matik", "lorem 10", "matik"],
};

export default function Game() {
  const [currentEnemy, setCurrentEnemy] = useState<IEnemy>();
  const [player, setPlayer] = useState<IPlayer>();
  const [story, setStory] = useState<string[]>([]);

  const getGame = async () => {};
  return (
    <div className="page">
      <div className="gamePageContainer">
        <div className="gamePageHeader">
          <div className="pageTitle">
            The Journey Of Bones And Thoughts
          </div>
        </div>
        <div className="gamePageScreensContainer">
          <div className="gamePageEnemyContainer">
            <EnemyBox enemy={currentEnemy} />
          </div>
          <div className="gamePageStoryContainer">
            <StoryBox texts={story} />
          </div>
          <div className="gamePagePlayerContainer">
            <PlayerBox player={player} />
          </div>
        </div>
        <div className="gamePageControlContainer">
          <Button className="attackButton">Attack</Button>
          <Button className="skillButton">Skill</Button>
          <Button className="escapeButton">Escape</Button>
        </div>
      </div>
    </div>
  );
}
