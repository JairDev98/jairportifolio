import { Text, Link } from '@chakra-ui/react';

import { Footer } from '../../components/Footer';
import { Head } from '../../components/Head';
import { SubMenu } from '../../components/SubMenu';
import TextTitle from '../../components/TextTitle';
import BodyContent from '../../components/BodyContent';
import { SubMenuItem } from '../../components/SubMenu/SubMenuItem';
import { TextBody } from '../../components/TextBody';
import TextSubtitle from '../../components/TextSubtitle';
import BackgroundImageButton from '../../components/BackgroundImageButton';

export default function React() {
  return (
    <>
      <Head />
      <SubMenu justifyCon="space-between" children={
              <>
                <SubMenuItem item="React" url="/projetos/react" />
                <SubMenuItem 
                    item="Instituto Pretos Novos" 
                    url="https://bakhitas-project.vercel.app/" 
                    target="_blank"
                />
              </>  
        }/>
       <BodyContent>
        <TextTitle
          icon="/logos/react.svg"
        >
          React
        </TextTitle>
          <br />
        <TextBody>
        O projeto de um novo layout para o Instituto Pretos Novos planejado e aplicado por mim, 
        teve o seu desenvolvimento de maneira descomplicada e simples como é possível visualizar.  
        <br/>
        Este projeto é apenas uma demonstração das capacidades do React para uma página web e não 
        tem a qualquer intenção de plagiar o site original e tudo o que ele representa. 
        Você pode conferir uma comparação entre o layout atual da página e o desenvolvido por mim:  
        </TextBody>
        <BackgroundImageButton 
                image="/images/inpprojeto.png" 
                title="o IPN em React"
                url="https://bakhitas-project.vercel.app/"
                target="_blank"
          />
            <br />
            <BackgroundImageButton 
                image="/images/ipnatual.png" 
                title="o atual IPN"
                url="https://pretosnovos.com.br/"
                target="_blank"
          />
        <TextSubtitle>
          Healthy Food
        </TextSubtitle>
          <br/>
          <TextBody>
          Projetado como um site voltado a boas práticas de alimentação e saúde.  
          <br/>
          Solicitado o seu desenvolvimento como um teste pela empresa GBC, a codificação 
          seguiu utilizando boas práticas do React.  
          <br/>
          Em sua página principal podemos ver como o layout desenvolvido foi pensando e 
          aplicado na responsividade do site. 
          <br/>
          Na página de registro de usuário, vemos algumas validações de dados sensíveis funcionando. 
          <br/>
          Nesta mesma página vemos a pesquisa de endereço que utiliza a API <Link target="_blank" color="red.500" href='https://viacep.com.br/' >ViaCep</Link>. 
          <br/>
          Após clicado em REGISTRAR este projeto armazena os dados do usuário informados no 
          LocalStorage do navegador e nos cookies, mostrando como os dados de um usuário podem 
          ser salvos de maneira segura em um banco de dados: 
        </TextBody>
        <BackgroundImageButton 
                image="/images/healthyfood.png" 
                title="o Healthy Food"
                url="https://healthyfood-liard.vercel.app/"
                target="_blank"
          />
      </BodyContent>
      <Footer />
   </>
  )
}
