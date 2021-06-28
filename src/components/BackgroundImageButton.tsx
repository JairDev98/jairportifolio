import { Flex, Image, Text, keyframes } from '@chakra-ui/react';
import ButtonBackground from '../components/ButtonBackground';

interface BackgroundImageButtonProps{
    image: string;
    title: string;
    url:string;
    target?:string;
}

export default function BackgroundImageButton({ image, title, url, target }: BackgroundImageButtonProps){

    const spin = keyframes`
    0% {background-position: 0% 50%;}
     50% {background-position: 100% 50%;}
     100% {background-position: 0% 50%;}
   `
   const animationI = `${spin} 15s ease infinite`

    return(
        <Flex
        direction="column"
        alignItems="center"
      >
      <Flex
        display={["none", "flex"]}
        margin="1rem 0"
        direction="column"
        alignItems="center"
        borderRadius="5px"
        background="linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
        backgroundSize="200% 200%"
        animation={animationI}
      >
        <Image
          margin="3rem 0"
          width={["0","0","95%","80%"]}
          src={image}
          alt="React Space"
          borderRadius="4px"
          transition=" 0.2s ease"
          _hover={{
            transform: "scale(1.2)"
          }}
        />  
      </Flex>
        <ButtonBackground title={title} url={url} target={target}/>
        <br/>
      </Flex>
    )
}