import { Text } from '@chakra-ui/react';

interface TextSubtitleProps{
    children: string;
}

export default function TextSubtitle({ children }: TextSubtitleProps){
    return(
        <Text
          fontWeight="700"
          fontSize={["x-large","1.2rem"]}
        >{children}</Text>
    )
}