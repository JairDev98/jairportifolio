import { Flex, Box, Link as ChakraLink } from '@chakra-ui/react';
import { ItemMenu } from './ItemMenu';
import Link from 'next/link';

export function Menu(){
    return(
        <Flex
            bg="gray.30"
            width="100%"
        >
            <Flex
                justifyContent="space-between"
                flex="1"
                margin={["0 0.5rem", "0 0.5rem","0 2rem","0 12rem"]}
            >
             <Link href="/" passHref>   
                <ChakraLink
                    color="white.10"
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
                <ItemMenu title="Desenvolvedor" href="/desenvolvedor"/>
            </Flex>
        </Flex>
    );
}