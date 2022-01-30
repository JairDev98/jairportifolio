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
        Este site foi inteiramente desenvolvido utilizando a biblioteca do ChrakraUI.  
        <br/>
        Como desenvolvedor posso falar que foi bem instrutivo e um desafio desenvolver este 
        projeto, não pela dificuldade, mas pelo conhecimento de explorar novas ferramentas 
        que esta biblioteca oferece.  
        <br/>
        A sua estruturação de forma declarativa e efetuando a estilização nas próprias tags do 
        HTML dentro da página, resultaram ser algo bem simples de ser efetuado refatoração e 
        manutenção do código do que, por exemplo, o aspecto de haver arquivos de estruturação 
        e estilização separados para este projeto. 
        <br/>
        Em 2022 fiz a primeira grande refatoração deste projeto, tudo ocorreu de 
        forma bem simples e sem contratempos, a estruturação efetuada em 2021 possibilitou que 
        fosse efetuado sem problemas. 
        </TextBody>
          <BackgroundImageButton 
                image="/images/sydjo.png" 
                title="o SyDJO"
                url="/"
          />                           
      </BodyContent>
      <Footer />
   </>
  )
}
