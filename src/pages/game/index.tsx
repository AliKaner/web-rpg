import { Grid, GridItem, Flex } from "@chakra-ui/layout";
import { CharacterBox } from "components/character_box";
import { ICharacterBox } from "components/character_box/character_box_model";
import EnemyBox from "components/enemy_box";
import { IEnemyBox } from "components/enemy_box/enemybox_model";
import { StoryBox } from "components/stroy_box";
import { IStoryBox } from "components/stroy_box/stroy_box_model";

const AliData: IEnemyBox = {
  enemyName: "BARAN GEZEN",
  imageURL: "https://picsum.photos/200/300",
  enemyATC: 31,
  enemyDEF: 31,
  enemyHP: 31,
};

const TextData: IStoryBox = {
  texts: ["lorem 10", "matik", "lorem 10", "matik", "lorem 10", "matik"],
};

const PlayerData: ICharacterBox = {
  characterName: "kaasdsdaad",
  characterHP: 31,
  characterATC: 31,
  characterDEF: 31,
  characterGold: 31,
  characterLevel: 31,
  characterEXP: 31,
  characterNextLevelEXP: 31,
};

export default function Game() {
  return (
    <Flex
      bgColor={"#0A2647"}
      color={"#144272"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      //bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Grid h="400px" gap={6} templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={1.5} rowSpan={2}>
          <EnemyBox
            imageURL={AliData.imageURL}
            enemyName={AliData.enemyName}
            enemyATC={AliData.enemyATC}
            enemyDEF={AliData.enemyDEF}
            enemyHP={AliData.enemyHP}
          />
        </GridItem>
        <GridItem colSpan={3} rowSpan={2}>
          <StoryBox texts={TextData.texts} />
        </GridItem>
        <GridItem colSpan={1.5} rowSpan={2}>
          <CharacterBox
            characterATC={PlayerData.characterATC}
            characterDEF={PlayerData.characterDEF}
            characterHP={PlayerData.characterHP}
            characterGold={PlayerData.characterGold}
            characterName={PlayerData.characterName}
            characterLevel={PlayerData.characterLevel}
            characterEXP={0}
            characterNextLevelEXP={0}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}
