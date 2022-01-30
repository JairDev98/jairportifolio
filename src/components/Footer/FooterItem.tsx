import { Text } from '@chakra-ui/react';

interface FooterItemProps{
    item:string;
}


export function FooterItem({item}: FooterItemProps){
    return(
        <Text color="black">
            {item}
        </Text>
    )
}