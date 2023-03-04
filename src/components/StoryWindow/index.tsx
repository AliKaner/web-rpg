import { FC } from "react";
import { Text, Box } from "@chakra-ui/react";
import { IStoryBox } from "../../types/story.type";

export const StoryBox: FC<IStoryBox> = ({ texts }) => {
  return (
    <>
        {texts.map((text) => (
          <>
            <Text as="i">{text}</Text>
            <br />
          </>
        ))}
    </>
  );
};
