import { IHero } from "api/models/IHero";
import { FC } from "react";
import {
  GridItem,
  Box,
  Image,
  Text,
  Stack,
  Flex,
  Progress,
  Spacer,
} from "@chakra-ui/react";
import { GiBroadsword, GiAbdominalArmor, GiHeartPlus } from "react-icons/gi";
import { stat } from "fs";

const HeroCard: FC<IHero> = ({ name, stats, img, desc }) => {
  console.log("341");
  return (
    <GridItem
      rowSpan={12}
      w="100%"
      bg="grey"
      borderRadius={"10"}
      alignContent={"center"}
    >
      <Stack>
        <Box alignContent={"center"}>
          <Image
            src={img}
            alt={name}
            borderRadius={"xl"}
            mx={"auto"}
            objectFit={"cover"}
          />
        </Box>
        <Text textAlign={"center"}>{name}</Text>
        <Stack width={"100%"}>
          <Flex justifyContent={'center'} >
            <GiBroadsword/>
            <Progress value={stats.atk * 5} size="xs" colorScheme="blue" bgColor={'red'}/>
            <Text>{stats.atk}/20</Text>
          </Flex>
          <Flex >
            <GiAbdominalArmor />
            <Progress value={stats.def * 5} size="xs" colorScheme="yellow" />
            <Text>{stats.def}/20</Text>
          </Flex>
          <Flex >
            <GiHeartPlus />
            <Progress value={stats.hp * 5} size="xs" colorScheme="red" />
            <Text>{stats.hp}/20</Text>
          </Flex>
        </Stack>
        <Text textAlign={"left"}>{desc}</Text>
      </Stack>
    </GridItem>
  );
};
export default HeroCard;

//GiAbdominalArmor  //GiBroadsword  //AiFillHeart
