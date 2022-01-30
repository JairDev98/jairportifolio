import { Flex, Text, Image } from "@chakra-ui/react";
import { TextBody } from "../TextBody";
import TextSubtitle from "../TextSubtitle";

export function Responsiveness(){
    return(
        <Flex
            flexDir="column"
            backgroundColor={"#920000"}
            color={"white"}
        >
            <TextSubtitle>Um único projeto rodando em múltiplas plataformas</TextSubtitle>
        <br />
        <TextBody>
        Fazendo o uso do React temos sites mais leves, performáticos, estilizados e responsivos 
        para se visitar na internet, com os desenvolvedores tendo à disposição inúmeras bibliotecas 
        que podem ser aplicadas a ele fornecendo um desenvolvimento mais prático. <br />
        Como exemplo de responsividade vamos nos focar em dois sites populares que utilizam essa 
        tecnologia:  
      <Flex
        direction="column"
      >
        <Flex
          marginTop={"2%"}
          justifyContent={["center","space-between"]}
          direction={["column","row"]}
        >

    <Flex
        direction="column"
        alignItems={"center"}
      >
      <Image
          width={["100%","70%"]}
          src={"/images/airbnb.png"}
          alt="React Space"
          borderRadius="4px"
          marginBottom={"3%"}
        />

      <Image
          width={["40%","25%"]}
          src={"/images/airbnb-logo.svg"}
          alt="React Space"
          borderRadius="4px"
          marginBottom={"5%"}
        />

  </Flex>      
        

      <Flex
        direction={"column"}
        alignItems={"center"}
        padding={"0"}
      >
      <Image
          width={["100%","70%"]}
          src={"/images/facebook.png"}
          alt="React Space"
          borderRadius="4px"
          marginBottom={"3%"}
        />
      
      <Image
          width={["40%","25%"]}
          src={"/images/facebook-logo.svg"}
          alt="React Space"
          borderRadius="4px"
        />

          </Flex>    
        </Flex>

      <Text
          textAlign="center"
          marginBottom="1rem"
          fontWeight="700"
          fontSize="12px"
          >Airbnb e Facebook em dispositivos móveis</Text>
      </Flex>
        Podemos observar como o layout entre diferentes dispositivos não é 
        engessado ou forçado, servindo de referência para outros desenvolvedores 
        de como aplicar seus layouts com React em seus projetos. 
        </TextBody>
        </Flex>
    )
}