import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SubMenuProps{
    children: ReactNode;
    justifyCon: string;
}

export function SubMenu({children, justifyCon}: SubMenuProps){
    return(
        <Flex
            bg="black.900"
        >
            <Flex
                justifyContent={justifyCon}
                flex="1"
                margin={["0 0.5rem", "0 0.5rem","0 2rem","0 12rem"]}
            >
            {children}
            </Flex>
        </Flex>
    );
}