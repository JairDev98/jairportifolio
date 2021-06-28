import { Text, Image, Flex } from '@chakra-ui/react';

interface TextTitleProps{
    icon?:string;
    children: string;
}

export default function TextTitle({ icon, children }: TextTitleProps){
    return(
        <Flex
            justifyContent="center"
            alignItems="center"
        >
            <Image 
                src={icon}
                width="40px"
                marginLeft="-3rem"
            />
                <Text 
                    marginLeft="1rem"
                    textAlign="center"
                    fontWeight="700"
                    fontSize={["x-large","1.5rem"]}
                >
                    {children}
                </Text>
        </Flex>
    )
}