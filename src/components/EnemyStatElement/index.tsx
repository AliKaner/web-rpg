import { StackItem, Stack, Progress, Text } from "@chakra-ui/react";
import { FC, useEffect, useMemo, useState } from "react";
import { IconType } from "react-icons/lib";
import { IStatElement, StatType } from "@/types/stat.type";
import { GiBroadsword, GiAbdominalArmor, GiHeartPlus } from "react-icons/gi";

const EnemyStatElement: FC<IStatElement> = ({ type, amount }) => {
  const statElementStyle = useMemo(() => {
    // TODO: erdekm bir daha bak
    let style: { icon: React.ReactNode; color: string } = {
      icon: null,
      color: "",
    };
    switch (type) {
      case StatType.attack:
        style = { icon: <GiBroadsword />, color: "red" };
        break;
      case StatType.defence:
        style = { icon: <GiAbdominalArmor />, color: "yellow" };
        break;
      case StatType.health:
        style = { icon: <GiHeartPlus />, color: "green" };
        break;
    }
    return style;
  }, [type]);

  return (
    <div className="enemyStatElementContainer">
        <div>{statElementStyle.icon}</div>
        <div>
            <Text textAlign={"right"}>{amount}</Text>
        </div>
    </div>
  );
};
export default EnemyStatElement;
