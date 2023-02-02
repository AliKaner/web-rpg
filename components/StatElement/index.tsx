import { StackItem, Stack, Progress, Text } from "@chakra-ui/react";
import { FC,useState } from "react";
import { IconType } from "react-icons/lib";
import { IStatElement, StatType } from "components/StatElement/IStatElement";
import { GiBroadsword, GiAbdominalArmor, GiHeartPlus } from "react-icons/gi";


const StatElement: FC<IStatElement> = ({ type,amount}) => {
  const [icon,setIcon] = useState<JSX.Element>(<></>);
  const [color,setColor] = useState<string>('');

  switch(type){
    case StatType.attack:
      setIcon(<GiBroadsword/>);
      setColor('red');
      break;
    case StatType.defence:
      setIcon(<GiAbdominalArmor/>);
      setColor('yellow');
      break;
    case StatType.healt:
      setIcon(<GiHeartPlus/>);
      setColor('green');
      break;
  }

  return (
    <div style={{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
    }}>
      <div>{icon}</div>
      <div>
        <Progress value={amount * 5} size={"sm"} colorScheme={color} width={'300px'} />
      </div>
      <div >
        <Text textAlign={'right'}>{`${amount}`}</Text>
      </div>
    </div>
  );
};
export default StatElement;
