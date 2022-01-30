import { Flex, Box, Link as ChakraLink } from '@chakra-ui/react';
import { ItemMenu } from './ItemMenu';
import Link from 'next/link';

export function Menu(){
    return(
        <Flex
            bg="blue.300"
            width="100%"
        >
            <Flex
                justifyContent="space-between"
                flex="1"
                margin={["0 0rem", "0 0rem","0 1rem","0 12rem"]}
                padding="0.7%"
            >
             <Link href="/" passHref>   
                <ChakraLink
                    fontSize="1.3rem"
                    color="gray.15"
                    transition="color 0.3s"
                    _hover={{
                        filter: "brightness(0.9)"
                    }}
                >S
                <Box as="span"
                    color="red.500"
                >
                    y
                </Box>
                DJO</ChakraLink>
             </Link>   
                <ItemMenu title="Projetos" href="/projetos"/>
                <ItemMenu title="Sobre mim" href="/desenvolvedor"/>
            </Flex>
        </Flex>
    );
}