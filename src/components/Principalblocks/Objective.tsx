import { Flex } from "@chakra-ui/react";
import { TextBody } from '../TextBody';
import TextSubtitle from '../TextSubtitle';

export function Objective(){

    return(
        <Flex
            flexDir="column"
            border={"1px solid black"}
            backgroundColor={"#0B005A"}
            color={"white"}
        >
        <TextSubtitle>Objetivo</TextSubtitle>
        <br />
        <TextBody>
        React é uma biblioteca de desenvolvimento criada para ser utilizada na 
        linguagem de programação <b>JavaScript</b>. <br/>  
        Exemplos de projetos criados fazendo o uso desta incrível tecnologia 
        podem ser visualizados e visitados aqui mesmo neste site que você está 
        agora e em vários outros espalhados pela internet. O React está dominando 
        o mercado de desenvolvimento por suas características únicas. 
        </TextBody>

        </Flex>
    )
}