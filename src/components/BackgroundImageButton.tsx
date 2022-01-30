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
        display={["unset", "flex"]}
        direction="column"
        alignItems="center"
        borderRadius="0px"
        background="linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
        backgroundSize="200% 200%"
        animation={animationI}
      >
        <Image
          margin="1.5rem auto"
          width={["95%","80%"]}
          src={image}
          alt="React Space"
          borderRadius="4px"
        />  
      </Flex>
        <ButtonBackground title={title} url={url} target={target}/>
        <br/>
      </Flex>
    )
}