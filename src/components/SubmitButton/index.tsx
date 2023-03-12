import { Button } from "@chakra-ui/react";
import { ISubmitButton } from "./submitButton.type";
import {FC} from "react";

export const SubmitButton: FC<ISubmitButton> = ({ onSubmit, text }) => {
  return (
    <div className="submitButton">
    <Button
      bg={"#383633"}
      color={"white"}
      _hover={{
        bg: "#d3af37",
      }}
      onClick={onSubmit}
    >
      {text}
    </Button>
    </div>
  );
};
