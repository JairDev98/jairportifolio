import { Link as ChakraLink } from '@chakra-ui/react';
import { ActiveLink } from '../ActiveLink';

interface itemMenuInterface{
    title:string;
    href: string;
}

export function ItemMenu({ title, href }:itemMenuInterface){
    return(
      <ActiveLink href={href} passHref>
        <ChakraLink
            fontSize="1.3rem"
            as="a"
            transition="color 0.3s"
           _hover={{
               filter: "brightness(0.9)"
           }}
        >{title}</ChakraLink>
      </ActiveLink>  
    )
}