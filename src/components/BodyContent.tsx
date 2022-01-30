import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BodyContentProps{
    children: ReactNode;
}

export default function BodyContent({ children }: BodyContentProps){
    return(
        <Flex
        flexDirection="column"
        //margin={["1rem 1rem","1rem 1rem","1rem 1rem","2rem 12rem"]}
        >
            {children}
        </Flex>
    )
}