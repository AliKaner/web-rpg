import { FC } from "react";
import { Text, Box } from "@chakra-ui/react";
import { IStoryBox } from "./storyBox.type";

export const StoryBox: FC<IStoryBox> = ({ texts }) => {
  return (
    <div className="storyBoxContainer">
        {texts.map((text) => (
          <>
            <Text>{text}</Text>
            <br />
          </>
        ))}
    </div>
  );
};
