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
                <SubMenuItem item="Next.Js" url="/projetos/nextjs" />
                <SubMenuItem 
                    item="Tv Tupi" 
                    url="https://television-project.vercel.app/" 
                    target="_blank"
                />
              </>  
        }/>
       <BodyContent>
        <TextTitle
          icon="/logos/next-js.svg"
        >
          Next.JS
        </TextTitle>
          <br />
          <TextBody>
          Este projeto teve como objetivo ser uma homenagem aos 70 anos da televisão 
          brasileira que completaram no ano de 2020.  
          <br/>
          O seu layout foi projetado com base nos estilos dos jornais impressos nos anos 
          50 se baseando principalmente nas formatações e estilos dos antigos jornais do 
          grupo de <b>Diários Associados</b> fundador da TV Tupi no ano de 1950, sendo a primeira 
          emissora de televisão da América Latina.  
          <br/>
          O layout foi projetado não de forma a caracterizar a emissora no passado de uma 
          forma nostálgica, mas sim supor como um site da emissora seria em plena década de 
          50 caso existisse a internet como temos hoje.  
          <br />
          A palheta de cores utilizada teve o objetivo de ser simular o tipo de imagem que os 
          primeiros aparelhos de televisão transmitiam, no padrão cinza, preto e branco e 
          detalhes cor de madeira, representando os primeiros televisores feitos em madeira. 
          </TextBody>
          <BackgroundImageButton 
                image="/images/tupi.png" 
                title="o projeto TV Tupi"
                url="https://television-project.vercel.app/"
                target="_blank"
          />
      </BodyContent>
      <Footer />
   </>
  )
}
