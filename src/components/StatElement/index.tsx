import { StackItem, Stack, Progress, Text } from "@chakra-ui/react";
import { FC,useEffect,useMemo,useState } from "react";
import { IconType } from "react-icons/lib";
import { IStatElement, StatType } from "@/types/stat.type";
import { GiBroadsword, GiAbdominalArmor, GiHeartPlus } from "react-icons/gi";


const StatElement: FC<IStatElement> = ({ type,amount}) => {
  

  
  const statElementStyle =  useMemo(() => {
    let style: {icon:React.ReactNode, color:string} = {icon:null, color:''};

    switch(type){
      case StatType.attack:
        style = {icon:<GiBroadsword/>,color:'red'};
        break;
      case StatType.defence:
        style = {icon:<GiAbdominalArmor/>,color:'yellow'};
        break;
      case StatType.healt:
        style = {icon:<GiHeartPlus/>,color:'green'};
        break;
    }
    return style;
  },[type])

  return (
    <div className="statElementContainer">
      <div>{statElementStyle.icon}</div>
      <div>
        <Progress value={amount * 5} size={"sm"} colorScheme={statElementStyle.color} width={'580px'} />
      </div>
      <div >
        <Text textAlign={'right'}>{`${amount}`}</Text>
      </div>
    </div>
  );
};
export default StatElement;
