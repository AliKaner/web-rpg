import { Grid, GridItem, Flex } from "@chakra-ui/layout";
import { IEnemy } from "@/api/models/IEnemy";
import { PlayerBox } from "@/components/PlayerBox";
import EnemyBox from "@/components/EnemyBox";
import { IEnemyBox } from "@/components/EnemyBox/enemyBox.type";
import { StoryBox } from "@/components/StoryBox";
import { IStoryBox } from "@/components/StoryBox/storyBox.type";
import { useState } from "react";
import { IPlayer } from "@/api/models/IPlayer";
import { Button } from "@chakra-ui/react";

const texts  = [
  "Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi","Oyun Başladı", "Oyuncu oyuna girdi", "Katık yedi", "Vurdu gibi oldu ama tabi bilemem kardeş yani nedir bu derdiniz  lan hadi artık kk aday olmasıns", "lorem 10", "matik"
];

export default function Game() {
  const [currentEnemy, setCurrentEnemy] = useState<IEnemy>();
  const [player, setPlayer] = useState<IPlayer>();
  const [story, setStory] = useState<string[]>([]);

  const getGame = async () => {};
  return (
    <div className="page">
      <div className="gamePage">
        <div className="gamePageHeader">
          <div className="gamePageHeaderTitle">
            The Journey Of Bones And Thoughts
          </div>
        </div>
        <div className="gamePageContent">
          <div className="gamePageContentEnemy">
            <EnemyBox enemy={currentEnemy} />
          </div>
          <div className="gamePageContentStory">
            <StoryBox texts={texts} />
          </div>
          <div className="gamePageContentPlayer">
            <PlayerBox player={player} />
          </div>
        </div>
        <div className="gamePageControl">
          <Button className="gamePageControlAttackButton">Attack</Button>
          <Button className="gamePageControlSkillButton">Skill</Button>
          <Button className="gamePageControlEscapeButton">Escape</Button>
        </div>
      </div>
    </div>
  );
}
