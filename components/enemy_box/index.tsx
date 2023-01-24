import { Card, CardBody, Image, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";
import Stat from "components/stat";
import { IEnemyBox } from "./enemybox_model";

const EnemyBox: FC<IEnemyBox> = ({
  enemyName,
  imageURL,
  enemyHP,
  enemyATC,
  enemyDEF,
}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Heading size="md">{enemyName}</Heading>
        <Image src={imageURL} alt="Enemy image" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Stat statName="HP" statAmount={enemyHP} />
          <Stat statName="ATC" statAmount={enemyATC} />
          <Stat statName="DEF" statAmount={enemyDEF} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default EnemyBox;
