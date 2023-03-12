import { Card, CardBody, Image, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { IEnemyBox } from "./enemyBox.type";

const EnemyBox: FC<IEnemyBox> = ({ enemy }) => {

  return (
    <div className="enemyBoxContainer">
      <div className="title">
        Enemy
      </div>
      <Image
        src="https://i0.wp.com/dmdavid.com/wp-content/uploads/2022/07/gem_stalker.jpeg"
        alt={enemy?.name}
        width={"90%"}
        height={"0"}
        style={{ width: "100%", height: "auto" }}
        />
      <p className="enemyBoxEnemyName">
        Katık Canavarı
      </p>
      <p className="enemyBoxEnemyDescription">
        Bu canavar çok fenadır duy da inanma
      </p>
      <div className="enemyBoxEnemyStats">
      </div>
    </div>
  );
};

export default EnemyBox;
