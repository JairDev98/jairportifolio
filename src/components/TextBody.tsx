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
          lineHeight="35px"
          marginBottom={marginB}
          marginLeft={marginL}
        >
            {children}
        </Text>
    )
}