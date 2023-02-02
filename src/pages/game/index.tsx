import { Grid, GridItem, Flex } from "@chakra-ui/layout";
import { IEnemy } from "api/models/IEnemy";
import { PlayerBox } from "components/PlayerBox";
import EnemyBox from "components/EnemyBox";
import { IEnemyBox } from "components/EnemyBox/IEnemyBox";
import { StoryBox} from "components/StoryWindow";
import { IStoryBox } from "components/StoryWindow/IStoryBox";
import { useState } from "react";
import { IPlayer } from "api/models/IPlayer";


const TextData: IStoryBox = {
  texts: ["lorem 10", "matik", "lorem 10", "matik", "lorem 10", "matik"],
};

export default function Game() {
  const [currentEnemy,setCurrentEnemy] = useState<IEnemy>();
  const [player,setPlayer] = useState<IPlayer>();
  const [story, setStory] = useState<string[]>([]);
    return (
    <div style={{
      display:'flex',
      flexDirection:'row',
      alignSelf:'auto', 
    }}>
      <div className="enemyContainer" style={{flex:1}}><EnemyBox enemy={currentEnemy}/></div>
      <div className="storyContainer" style={{flex:3}}><StoryBox texts={story}/></div>
      <div className="playerContainer"style={{flex:1}}><PlayerBox player={player}/></div>
    </div>
  );
}
