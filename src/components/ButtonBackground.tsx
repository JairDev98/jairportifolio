import { Flex, Text, keyframes } from '@chakra-ui/react';

interface ButtonBackgroundProps{
    title: string;
    url:string;
    target?:string;
}

export default function ButtonBackground({ title, url, target }: ButtonBackgroundProps){

    const spin = keyframes`
    0% {background-position: 0% 50%;}
     50% {background-position: 100% 50%;}
     100% {background-position: 0% 50%;}
   `
   const animationI = `${spin} 15s ease infinite`

    return(
        <Flex
        as="a"
        href={url}
        target={target}
        direction="column"
        width="200px"
        transition="color 0.3s"
            _hover={{
                filter: "brightness(0.9)"
            }}
      >
      <Flex
        margin="1rem 0"
        direction="column"
        alignItems="center"
        borderRadius="50px"
        padding="0.5rem"
        background="linear-gradient(to right, #24C6DC 0%, #514A9D  51%, #24C6DC 100%)"
        backgroundSize="500% 500%"
        animation={animationI}
      >
          <Text
            color="white.10"
          >
            Visite {title}
          </Text>
       
      </Flex>
      </Flex>
    )
}