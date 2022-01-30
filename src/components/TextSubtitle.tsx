import { Text } from '@chakra-ui/react';

interface TextSubtitleProps{
    children: string;
}

export default function TextSubtitle({ children }: TextSubtitleProps){
    return(
        <Text
          fontWeight="700"
          fontSize={["x-large","3rem"]}
          margin={["1rem 0rem 0rem 1rem","1rem 0rem 0rem 1rem","1rem 0rem 0rem 1rem","0rem 12rem"]}
        >{children}</Text>
    )
}