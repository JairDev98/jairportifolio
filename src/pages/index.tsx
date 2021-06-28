import { Flex, Text, Image, keyframes } from '@chakra-ui/react';

import { Footer } from '../components/Footer';
import { Head } from '../components/Head';
import { SubMenu } from '../components/SubMenu';
import { TextBody } from '../components/TextBody';
import TextTitle from '../components/TextTitle';
import TextSubtitle from '../components/TextSubtitle';
import BodyContent from '../components/BodyContent';
import { SubMenuItem } from '../components/SubMenu/SubMenuItem';

export default function Home() {

  const spin = keyframes`
  0% {background-position: 0% 50%;}
   50% {background-position: 100% 50%;}
   100% {background-position: 0% 50%;}
 `
 const animationI = `${spin} 15s ease infinite`

  return (
    <>
      <Head />
      <SubMenu justifyCon="center" children={
          <>
            <SubMenuItem item="Systems Delevopment Jair Aparecido de Oliveira" url="/" />
          </>  
        }/>
       <BodyContent>
        <TextTitle>
          React para seu site
        </TextTitle>
          
        <Image
          display={["none", "unset"]}
          margin="1rem 0"
          justifyContent="center"
          objectFit="cover"
          src={"/images/Reactspace.png"}
          alt="React Space"
          borderRadius="4px"
        />
        <br/>
        <TextSubtitle>Onde está o React?</TextSubtitle>
        <br />
        <TextBody>
        Aqui mesmo neste portifólio que você está navegando e em vários sites 
        que possuem milhares de usuários ativos. React entre todas as tecnologias
        de desenvolvimento de sistemas, ganha destaque pela performance e alta produtividade
        durante o desenvolvimento de projetos. Fazendo o seu uso, temos sites mais leves e 
        performáticos para se navegar na internet, além de se ter a disposição inúmeras 
        bibliotecas que fornecem um desenvolvimento mais prático podendo ser desenvolvido 
        projetos mais estilizados, navegáveis e responsivos aos quais você pensou que só 
        podiam ser desenvolvidos e utilizados por grandes corporações.
        </TextBody>

        <br />
        <TextSubtitle>O que usa esse React? Java, Asp.Net, magia?</TextSubtitle>
        <br />
        <TextBody>
        Primeiramente não, não e talvez. React é uma biblioteca de programação desenvolvida 
        totalmente para a linguagem programação JavaScript, ou seja, o que antes era uma linguagem 
        volta a dar ação ao HTML para o usuário interagir com a página Web juntamente com o CSS, 
        foi totalmente repaginado como um motor principal que faz com que essas linguagens de 
        marcação de texto funcionem de forma a não deixar o seu site de forma engessada, como era 
        padrão utilizando apenas HTML e CSS para o desenvolvimento de um site.
        </TextBody>

        <br />
        <TextSubtitle>E como fica a estilização, navegação e responsividade? Meu site irá rodar em celulares?</TextSubtitle>
        <br />
        <TextBody>
        Vamos nos focar em 2 sites populares que utilizam a tecnologia React: Airbnb e Facebook. 
        Nesses sites podemos observar como o estilo não é algo engessado ou mesmo ultrapassado para 
        os padrões atuais e com certeza servindo de referência para outros desenvolvedores de como 
        aplicar os estilos com React em seu projeto.
      <Flex
        marginTop="1rem"
        direction="column"
      >
      <Flex
        justifyContent="center"
        borderRadius="5px"
        background="linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
        backgroundSize="400% 400%"
        animation={animationI}
      >
        <Flex
          margin="1rem"
          alignItems={["center", "none"]}
          justifyContent={["center","space-between"]}
          direction={["column", "row"]}
        >

        <Image
          width={["100%","40%"]}
          src={"/images/airbnb.png"}
          alt="React Space"
          borderRadius="4px"
          transition=" 0.2s ease"
          _hover={{
            transform: "scale(1.06)"
          }}
        />
          <br/>
        <Image
          width={["100%","40%"]}
          src={"/images/facebook.png"}
          alt="React Space"
          borderRadius="4px"
          transition=" 0.2s ease"
          _hover={{
            transform: "scale(1.06)"
          }}
        />    
        </Flex>
      </Flex>
      <Text
          textAlign="center"
          marginBottom="1rem"
          fontWeight="700"
          fontSize="12px"
          >Airbnb e Facebook em layouts responsivos</Text>
      </Flex>
        O React conta com várias bibliotecas para facilitar o desenvolvimento da navegação e 
        responsividade do seu site, já imaginou o seu site ao mesmo tempo ser totalmente navegável 
        tanto nos computadores e notebooks e ao mesmo tempo ser totalmente versátil em celulares e outros 
        dispositivos móveis? Pois é, com React justamente podemos fazer isso acontecer. Por exemplo, se não 
        acredita acesse o seu perfi do Facebook pelo navegador de internet do seu celular.
        </TextBody>

        <br />
        <TextSubtitle>Onde estão os exemplos práticos?</TextSubtitle>
        <br />
        <TextBody>
        Como melhor do que falar é demonstrar, navegue neste portifólio onde eu coloquei exemplos de 
        projetos que foram desenvolvidos por este programador que vos escreve e também de sites utilizando 
        esta tecnologia que estão atualmente no ar e sendo utilizados por milhares de pessoas, alguns vão 
        te surpreender e fazer você pensar o porque de ainda não estar utilizando o React no seu site.
        </TextBody>
      </BodyContent>
      <Footer />
   </>
  )
}
