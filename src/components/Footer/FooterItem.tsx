import { Text } from '@chakra-ui/react';

interface FooterItemProps{
    item:string;
}


export function FooterItem({item}: FooterItemProps){
    return(
        <Text color="white.10">
            {item}
        </Text>
    )
}