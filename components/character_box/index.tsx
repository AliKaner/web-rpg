import { ICharacterBox } from "./character_box_model";
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
import Stat from "components/stat";

export const CharacterBox: FC<ICharacterBox> = ({
  characterName,
  characterHP,
  characterATC,
  characterDEF,
  characterGold,
  characterLevel,
}) => {

  const levelUp = () => {
    //set level
  }




  return (
    <Card h="100%" maxW="sm">
      <CardBody>
        <Grid gap={6}>
          <GridItem>
            <Heading size="md">{characterName}</Heading>
            <Text>{characterLevel}</Text>
          </GridItem>
          <GridItem>
            <HStack>
              <Stat statName="HP" statAmount={characterHP} />
              <IconButton aria-label="Add to friends" icon={<AddIcon />} />
            </HStack>
          </GridItem>
          <GridItem>
            <HStack>
              <Stat statName="ATC" statAmount={characterATC} />
              <IconButton aria-label="Add to friends" icon={<AddIcon />} />
            </HStack>
          </GridItem>
          <GridItem>
            <HStack>
              <Stat statName="DEF" statAmount={characterDEF} />
              <IconButton aria-label="Add to friends" icon={<AddIcon />} />
            </HStack>
          </GridItem>
          <GridItem>
            <Stat statName="DEF" statAmount={characterGold} />
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
};
