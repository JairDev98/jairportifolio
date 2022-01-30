import { Flex } from "@chakra-ui/react";
import { TextBody } from "../TextBody";
import TextSubtitle from "../TextSubtitle";

export function Productivity(){
    return(
        <Flex
            flexDir="column"
            border={"1px solid black"}
            backgroundColor={"#000000"}
            color={"white"}
        >
            <TextSubtitle>O que usa o React? Java, Asp.Net, magia?</TextSubtitle>
        <br />
        <TextBody>
        Entre várias tecnologias de desenvolvimento de sites o React, ganha destaque 
        pela organização de código e alta produtividade durante o desenvolvimento de projetos. <br />  
        O React conta com várias bibliotecas para facilitar o desenvolvimento do seu site, 
        já imaginou o seu site ao mesmo tempo ser totalmente navegável tanto em computadores e 
        notebooks e ao mesmo tempo ser totalmente versátil em celulares e outros dispositivos 
        móveis utilizando um único projeto? 
        </TextBody>
        </Flex>
    )
}