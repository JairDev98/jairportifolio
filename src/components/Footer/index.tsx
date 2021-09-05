import { Flex, Box } from '@chakra-ui/react';
import { FooterItem } from './FooterItem';

export function Footer(){
    var date = new Date();

    return(
        <Flex as="footer"
            bg="blue.300"
            padding="0.5rem 0"
            bottom="0"
            width="100%"
            position="relative"
        >
            <Flex
                justifyContent="space-between"
                margin={["0 0.5rem", "0 0.5rem","0 2rem","0 12rem"]}
                flex="1"
                direction={["column", "row"]}
                alignItems={["center", "unset"]}
            >
                <FooterItem 
                    item="Systems Delevopment Jair Aparecido de Oliveira" />
                 <br/>
                <FooterItem item={"Copyright ©." + date.getFullYear()} />
            </Flex>
        </Flex>
    )
}