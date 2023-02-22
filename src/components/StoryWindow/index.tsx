import{FC} from 'react';
import{Text,Box} from '@chakra-ui/react';
import { IStoryBox } from '../../types/story.type';

export const StoryBox:FC<IStoryBox>=({
texts,
})=> {
    return(
        <>
        <Box
        bg ='blue.300'
        w='100%'
        h='100%' 
        color='white' 
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='auto'>
            {texts.map((text) => (
                <>
                    <Text as='i'>{text}</Text>
                    <br/>
                </>
            ))}
        </Box>
        </>
    )
}
