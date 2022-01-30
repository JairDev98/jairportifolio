import {Text} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TextBodyProps{
    children: ReactNode;
    marginB?: string;
    marginL?: string[];
}

export function TextBody({ children, marginB, marginL }: TextBodyProps){
    return(
        <Text
          fontSize={["lg", "lg"]}
          align="justify"
          lineHeight="50px"
          marginBottom={marginB}
          marginLeft={marginL}
          margin={["0rem 1rem","0rem 1rem","0rem 1rem","0rem 12rem 0.5rem 12rem"]}
        >
            {children}
        </Text>
    )
}