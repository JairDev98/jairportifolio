import { Link as ChakraLink } from '@chakra-ui/react';
import { ActiveLink } from '../ActiveLink';

interface SubMenuItemProps{
    item:string;
    url?:string;
    target?:string;
}

export function SubMenuItem({item, url, target}: SubMenuItemProps){
    return(
        <ActiveLink href={url} passHref>
            <ChakraLink
                 target={target}
                 color="white.10"
                 transition="color 0.3s"
                _hover={{
                    filter: "brightness(0.9)"
                    }}
                >
                {item}
            </ChakraLink>
        </ActiveLink>    
    )
}