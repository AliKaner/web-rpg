import { IStat } from "./stat.type";
import { GiBroadsword, GiAbdominalArmor, GiHeartPlus } from "react-icons/gi";
import { FC } from "react";

const icons = {
  hp: <GiHeartPlus />,
  def: <GiAbdominalArmor />,
  atk: <GiBroadsword />,
};

export const Stat: FC<IStat> = ({ type, amount }) => {
  return (
    <div className="stat">
      <div className="statAmount">{amount}</div>
      <div className="statIcon">{icons[type]}</div>
    </div>
  );
};
