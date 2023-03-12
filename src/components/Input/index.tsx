import { Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import { IInput } from "../Input/input.type";
import { FC, ChangeEvent } from "react";

export const InputArea: FC<IInput> = ({ value, type, onChange }) => {
  const title = type.charAt(0).toUpperCase()+ type.slice(1)
  return (
    <FormControl id={type} className="inputBase">
      <FormLabel>{title}</FormLabel>
      <Input
        type={type}
        isInvalid
        errorBorderColor="#383633"
        focusBorderColor="#d3af37"
        name={type}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};
