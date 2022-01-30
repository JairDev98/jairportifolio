import { Flex, Image } from '@chakra-ui/react';

import { Footer } from '../components/Footer';
import { Head } from '../components/Head';
import { SubMenu } from '../components/SubMenu';
import TextTitle from '../components/TextTitle';
import BodyContent from '../components/BodyContent';
import { SubMenuItem } from '../components/SubMenu/SubMenuItem';
import { TextBody } from '../components/TextBody';
import ButtonBackground from '../components/ButtonBackground';
import TextSubtitle from '../components/TextSubtitle';

export default function Desenvolvedor() {
  return (
    <>
      <Head />
      <SubMenu justifyCon="center" children={
              <>
                <SubMenuItem 
                    item="Jair Aparecido de Oliveira" 
                    url="/desenvolvedor" 
                />
              </>  
        }/>
       <BodyContent>
        <br/>
        <TextTitle>Jair Aparecido de Oliveira</TextTitle>
        <br/>
        <Flex
          marginBottom="3rem"
          direction={["column"]}
          alignItems={["center", "center"]}
        >
          <Image 
            src="https://avatars.githubusercontent.com/u/68485886?v=4"
            width="210px"
            borderRadius="50%"
          />
          
          <TextBody
            marginL={["0","auto"]}
          >
            Com entusiasmo e paixão pelo desenvolvimento de sistemas, quero integrar uma equipe cheia de desenvolvedores 
            com a mesma paixão pelo trabalho dedicada sempre para entregar os melhores resultados.
            <br/>
            Nunca parando de estudar e sempre atualizando meus conhecimentos sobre novas tecnologias como Nodejs, React e Reactnative, 
            juntos podemos fazer a diferença, pois através da educação o mundo pode ser transformado.
          </TextBody>
        </Flex>
        <TextSubtitle>Contato</TextSubtitle>
        <br/>
          <Flex
            direction="column"
            alignItems="center"
          >
            <Image 
              src="/logos/linkedin.svg" 
              width="60px"
            />
            <ButtonBackground 
              title="meu Linkedin" 
              url="https://www.linkedin.com/in/jair-aparecido-de-oliveira-507747148/" 
              target="_blank"
            />
            <br/>
            <Image 
              src="/logos/github.svg" 
              width="60px"
            />
            <ButtonBackground 
              title="meu Github" 
              url="https://github.com/JairDev98" 
              target="_blank"
            />
          </Flex>
      </BodyContent>
      <Footer />
   </>
  )
}
