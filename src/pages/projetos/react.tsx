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
          O projeto de um novo layout para o Instituto Pretos Novos desenhado e 
          desenvolvido por mim, teve o seu desenvolvimento de maneira descomplicada 
          e bem aplicada como é possível visualizar. Este projeto é apenas uma demonstração 
          das capacidades do React em uma página web e não tem a qualquer intenção de plagiar 
          o site original e tudo o que ele representa. Você pode conferir uma comparação entre 
          o layout atual da página e o desenvolvido por mim:  
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
          O projeto de uma home page voltado a boas práticas de alimentação e saúde. Solicitado como um teste pela empresa
          GBC, este foi desenvolvido utilizando boas práticas React. Em sua página principal podemos ver como a responsividade e o layout
          desenvolvido se completam. Na página de registro de usuário, vemos algumas validações de dados sensíveis funcionando e a pesquisa
          de endereço utilizando a API <Link target="_blank" color="red.500" href='https://viacep.com.br/' >ViaCep</Link>, 
          o projeto também armazena os dados do usuário no LocalStorage do navegador e tambem nos cookies, mostrando como os dados informados
          podem ser salvos de maneira segura em um banco de dados:
        </TextBody>
        <BackgroundImageButton 
                image="/images/healthyfood.png" 
                title="o Healthy Food"
                url="https://healthyfood-liard.vercel.app/"
                target="_blank"
          />
          <br/>
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
              href="https://pt-br.reactjs.org/docs/getting-started.html">
          Introdução – React (reactjs.org) 
        </Link>
          , onde pode ser conferido na integra.
        </Text>  
          <br/>        
        <TextSubtitle>
          Pratique React
        </TextSubtitle>
          <br/>
        <TextBody>
          React foi pensado desde o início para ser adotado gradualmente e você pode usar menos ou 
          mais da biblioteca de acordo com sua necessidade. Se você quer uma amostra do React, 
          adicionar interatividade a uma página HTML simples ou iniciar uma aplicação React complexa, 
          os links desta seção o ajudarão no início.
        </TextBody>
            <BackgroundImageButton
                    image="/images/airbnbfull.png" 
                    title="o Airbnb" 
                    url="https://www.airbnb.com.br/"
                    target="_blank"
            />
          <br/>
        <TextSubtitle>
          Editores Online
        </TextSubtitle>
          <br/>
        <TextBody>
        Se você está interessado em testar um pouco o React, pode usar um editor de código online. 
        Tente um Olá Mundo no CodePen, CodeSandbox, ou Stackblitz. 
          <br/>
        Se prefere usar o seu próprio editor de texto, pode também baixar este arquivo HTML, editá-lo 
        e a partir do seu sistema de arquivos abrir em seu navegador web. Este arquivo faz uma lenta 
        transformação de código em tempo de execução, portanto nós recomendamos usar somente para 
        demonstrações simples.
        </TextBody>
          <br/>
        <TextSubtitle>
          Adicione React a um Website
        </TextSubtitle>
          <br/>
        <TextBody>
          Você pode adicionar React a uma página HTML em um minuto. Você pode então expandir gradualmente 
          seu uso ou mantê-lo limitado a alguns widgets dinâmicos.
        </TextBody>
            <BackgroundImageButton 
                  image="/images/facebookfull.png" 
                  title="o Facebook"
                  url="https://pt-br.facebook.com/"
                  target="_blank"
            />
          <br/>
        <TextSubtitle>
          Crie uma nova Aplicação React
        </TextSubtitle>
          <br/>
        <TextBody>
        Ao iniciar um projeto React, uma simples página HTML com tags script pode ser a melhor opção. 
        É necessário apenas um minuto para configurar! <br />
        A medida que sua aplicação cresce, você pode começar a considerar uma configuração mais integrada. 
        Há inúmeras ferramentas JavaScript que nós recomendamos para aplicações grandes. Cada uma delas 
        exige pouca ou até nenhuma configuração e permite a você aproveitar ao máximo o rico ecossistema 
        do React. Aprenda como.
        </TextBody>
          <br/>
        <TextSubtitle>
          Recursos JavaScript
        </TextSubtitle>
          <br/>
        <TextBody>
        A documentação do React assume que você tem alguma familiaridade com a programação na linguagem 
        JavaScript. Você não precisa ser um especialista, porém é mais difícil aprender o React e o 
        JavaScript ao mesmo tempo. <br />
        Recomendamos que você leia esta visão geral do JavaScript para verificar seu nível de conhecimento.
        Ela levará entre 30 minutos e uma hora. Assim você se sentirá mais confiante para aprender React.
        </TextBody>
      </BodyContent>
      <Footer />
   </>
  )
}
