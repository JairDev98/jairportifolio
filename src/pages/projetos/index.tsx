import { Footer } from '../../components/Footer';
import { Head } from '../../components/Head';
import { SubMenu } from '../../components/SubMenu';
import { TextBody } from '../../components/TextBody';
import TextTitle from '../../components/TextTitle';
import TextSubtitle from '../../components/TextSubtitle';
import BodyContent from '../../components/BodyContent';
import { SubMenuItem } from '../../components/SubMenu/SubMenuItem';
import BackgroundImageButton from '../../components/BackgroundImageButton';

export default function Projetos() {
  return (
    <>
      <Head />
       <SubMenu justifyCon="space-between" children={
              <>
                <SubMenuItem item="React" url="/projetos/react" />
                <SubMenuItem item="Next.Js" url="/projetos/nextjs" />
                <SubMenuItem item="Chakra" url="/projetos/chakra" /> 
              </>  
        }/>
       <BodyContent>
        <TextTitle>
          React, Next.Js e Chakra
        </TextTitle>
          <br />
        <TextBody>
          Você pode estar confuso pois antes estava te apresentando o React 
          e es que você se depara com outros dois nomes: Next.js e Chakra, 
          mas sem problema você vai ver como estes são tão simples de se entender como o React.
        </TextBody>
          <br />
        <TextSubtitle>React</TextSubtitle>
          <br />
        <TextBody>
          React é uma biblioteca de programação desenvolvida totalmente para a linguagem programação 
          JavaScript, ou seja, o que antes era uma linguagem volta a dar ação ao HTML para o usuário 
          interagir com a página Web juntamente com o CSS, foi totalmente repaginado como um motor 
          principal que faz com que essas linguagens de marcação de texto funcionem de forma a não 
          deixar o seu site de forma engessada, como era padrão utilizando apenas HTML e CSS para o 
          desenvolvimento de um site.
        </TextBody>
          
          <BackgroundImageButton 
                image="/images/vimeo.png" 
                title="o Vimeo"
                url="https://vimeo.com/pt-br"
        />

        <TextSubtitle>Next.js</TextSubtitle>
          <br />
        <TextBody>
          O Next.js nada mais é do que um framework para o React, ou seja, ele funciona totalmente 
          com base no React que conhecemos. O seu diferencial é quanto ao seu comportamento na indexação 
          de pesquisas de motores de busca como o Google, Yahoo, Bing ... etc. Quando você efetua uma 
          busca nesses motores o que eles fazem é indexar o conteúdo da página ao resultado de pesquisas, 
          assim você consegue visualizar um trecho do que está dentro da página antes mesmo de acessá-la, 
          porém se o seu site tiver o conteúdo armazenado em outra plataforma como por exemplo: um serviço 
          de postagem onde o conteúdo fica armazenado lá dentro e o seu site apenas faz a busca e coloca o 
          resultado na sua página, pois bem, o que acontece é que seu site demora alguns milésimos de segundo 
          para fazer isso porém o indexador pode não aguardar este tempo e simplesmente ignorar a sua página, 
          pra isso existe o Next.js, onde ele já vai deixar o seu site armazenado de forma estática por um 
          período de tempo pré determinado e assim o motor de busca poder fazer a indexação desta página.
        </TextBody>

          <BackgroundImageButton
                  image="/images/magalu.png" 
                  title="o Magazine Luiza"
                  url="https://www.magazineluiza.com.br/"
          />
        
        <TextSubtitle>Chakra</TextSubtitle>
          <br />
        <TextBody>
          O Chakra é outra biblioteca do nosso React, ele proporciona a criação de páginas web de maneira 
          mais simplificada e focada principalmente na estilização dos componentes da sua página. Quando 
          um programador por exemplo, necessitar fazer alguma alteração no código da sua página o mesmo não 
          terá muito trabalho para identificar o que foi feito, assim acelerando o processo de manutenção. 
          Só um pequeno adendo, o Chakra é desenvolvido em cima do Next.js, ou seja, desenvolvendo com ele 
          você traz todas as funcionalidades do React e Next.js para a sua página web, um combo e tanto que 
          o seu site está precisando.
        </TextBody>

          <BackgroundImageButton
                  image="/images/sydjo.png" 
                  title="aqui mesmo"
                  url="/"
          />
      </BodyContent>
      <Footer />
   </>
  )
}
