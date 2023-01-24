import { Text } from "@chakra-ui/react";
import { FC } from "react";
import { IStat } from "./stat_model";

const Stat: FC<IStat> = ({ statName, statAmount }) => {
  return <Text>{`${statName}: ${statAmount}`}</Text>;
};
export default Stat;
