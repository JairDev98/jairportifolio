import { Flex, Image, Text, keyframes } from '@chakra-ui/react';

interface BackgroundImageProps{
    image: string;
    subtitle:string;
}

export default function BackgroundImage({ image, subtitle }: BackgroundImageProps){

    const spin = keyframes`
    0% {background-position: 0% 50%;}
     50% {background-position: 100% 50%;}
     100% {background-position: 0% 50%;}
   `
   const animationI = `${spin} 15s ease infinite`

    return(
        <Flex
        direction="column"
      >
      <Flex
        margin="1rem 0"
        direction="column"
        alignItems="center"
        borderRadius="5px"
        background="linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
        backgroundSize="400% 400%"
        animation={animationI}
      >
        <Image
          margin="3rem 0"
          width="80%"
          src={image}
          alt="React Space"
          borderRadius="4px"
          transition=" 0.2s ease"
          _hover={{
            transform: "scale(1.2)"
          }}
        />  
      </Flex>
      <Text
          textAlign="center"
          marginBottom="1rem"
          fontWeight="700"
          fontSize="12px"
          >{subtitle}</Text>
      </Flex>
    )
}