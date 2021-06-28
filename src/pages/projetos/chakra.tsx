import { Text, Link } from '@chakra-ui/react';

import { Footer } from '../../components/Footer';
import { Head } from '../../components/Head';
import { SubMenu } from '../../components/SubMenu';
import TextTitle from '../../components/TextTitle';
import BodyContent from '../../components/BodyContent';
import { SubMenuItem } from '../../components/SubMenu/SubMenuItem';
import { TextBody } from '../../components/TextBody';
import BackgroundImageButton from '../../components/BackgroundImageButton';
import TextSubtitle from '../../components/TextSubtitle';

export default function React() {
  return (
    <>
      <Head />
      <SubMenu justifyCon="space-between" children={
              <>
                <SubMenuItem item="Chakra" url="/projetos/chakra" />
                <SubMenuItem item="Voltar para home" url="/" />
              </>  
        }/>
       <BodyContent>
        <TextTitle
          icon="/logos/chakra.svg"
        >
          Chakra
        </TextTitle>
          <br />
        <TextBody>
          Este portifólio foi inteiramente desenvolvido utilizando a biblioteca do Chrakra. 
          Como desenvolvedor posso falar que foi bem instrutivo e um desafio desenvolver este projeto, 
          não pela dificuldade, mas pelo conhecimento de explorar as novas ferramentas que esta 
          biblioteca oferece. A sua estruturação de forma declarativa e efetuando a estilização nas 
          próprias tags do HTML dentro da página, resultaram ser algo bem simples de ser efetuado refatoração 
          e manutenção do código do que por exemplo, o aspecto de haver arquivos de estruturação e 
          estilização separados para este projeto.
        </TextBody>
          <BackgroundImageButton 
                image="/images/sydjo.png" 
                title="o SyDJO"
                url="/"
          />
            <br />
        <Text
          fontSize="14px"
          lineHeight="35px"
          margin="1rem 0"
          textAlign="center"
          bg="gray.20"
          borderRadius="50px"
          padding="1rem"
        >
          O texto abaixo foi retirado do site dos desenvolvedores:
            <Link
              target="_blank"
              marginLeft="5px"
              color="red.500"
              href="https://chakra-ui.com/docs/getting-started">
          Getting Started - Chakra UI (chakra-ui.com) 
            </Link>
          , onde pode ser conferido na integra.
        </Text>  
          <br/>   
        <TextSubtitle>
          Acessível
        </TextSubtitle>
        <br/>
        <TextBody>
          Chakra UI segue estritamente os padrões WAI-ARIA para todos os componentes.
        </TextBody>
        <br/>
        <TextSubtitle>
          Personalizável 
        </TextSubtitle>
        <br/>
        <TextBody>
          Personalize qualquer parte de nossos componentes para atender às suas necessidades de design.
        </TextBody>
        <br/>
        <TextSubtitle>
          Componentização
        </TextSubtitle>
        <br/>
        <TextBody>
          Projetado com a composição em mente. Componha novos componentes com facilidade.
        </TextBody>
        <br/>
        <TextSubtitle>
          IU claro e escuro
        </TextSubtitle>
        <br/>
        <TextBody>
          Otimizado para vários modos de cores. Use claro ou escuro, sua escolha.
        </TextBody>
        <br/>
        <TextSubtitle>
          Experiência do desenvolvedor
        </TextSubtitle>
        <br/>
        <TextBody>
          Garantido para aumentar sua produtividade ao construir seu aplicativo ou site.
        </TextBody>
        <br/> 
        <TextSubtitle>
          Comunidade Ativa
        </TextSubtitle>
          <br/>
        <TextBody>
          Somos uma equipe de mantenedores ativos, prontos para ajudá-lo sempre que você precisar.
        </TextBody>
        <BackgroundImageButton 
                image="/images/tuteria.png" 
                title="o Tuteria"
                url="https://www.tuteria.com/"
                target="_blank"
          />
            <br />
        <TextSubtitle>
          Princípios de design
        </TextSubtitle>
        <br/>
        <TextBody>
        Chakra UI é estabelecido em princípios que mantêm seus componentes razoavelmente consistentes. 
        Compreender esses conceitos o ajudará a contribuir melhor para a IU do Chakra.
        <br/>
        Nosso objetivo é projetar componentes simples e combináveis que atendam a problemas de design de 
        IU da vida real. Para isso, desenvolvemos um conjunto de princípios que nos ajudam a estar sempre 
        nesse caminho.
        </TextBody>
          <BackgroundImageButton 
                image="/images/lattice.png" 
                title="o Lattice"
                url="https://lattice.com/"
                target="_blank"
          />
            <br />
        <TextSubtitle>
          Como o Chakra é diferente do Ant Design?
        </TextSubtitle>
        <br/>
        <TextBody>
          A biblioteca Ant Design React é uma implementação da linguagem de design ant.design. Isso 
          significa que os componentes seguem as regras e valores de design existentes, permitindo a 
          personalização de certas variáveis apenas até certo ponto. O Chakra não está vinculado a nenhum 
          sistema de design e oferece mais liberdade com a personalização dos componentes para implementar 
          seu próprio design.
        </TextBody>                                         
      </BodyContent>
      <Footer />
   </>
  )
}
