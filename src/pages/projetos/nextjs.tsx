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
            Este projeto teve como objetivo ser uma homenagem aos 70 anos da televisão brasileira 
            que foram alcançados no ano de 2020. O seu layout foi projetado com base nos estilos de 
            jornais dos anos 50 principalmente nas formatações e estilos dos antigos jornais do grupo 
            de Diários Associados, o fundador da TV Tupi no ano de 1950 sendo a primeira emissora de 
            televisão da América Latina. O layout em si foi projetado não de forma a caracterizar a 
            emissora no passado com uma forma nostálgica, mas sim caracterizar como um portal dela em 
            plena década de 50 caso existisse uma rede de computadores como temos hoje, isso se dá também 
            na sua palheta de cores utilizada que teve o objetivo de ser simular ao tipo de imagem que os 
            primeiros aparelhos de televisão transmitiam.
          </TextBody>
          <BackgroundImageButton 
                image="/images/tupi.png" 
                title="o projeto TV Tupi"
                url="https://television-project.vercel.app/"
                target="_blank"
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
              O texto abaixo foi retirado do site de cursos online Alura, escrito por Felipe Nascimento em 16 de Fevereiro de 2021:
            <Link
                target="_blank"
                marginLeft="5px"
                color="red.500"
                href="https://www.alura.com.br/artigos/next-js-vantagens">
                NextJS: por que usar? | Alura Cursos Online 
            </Link>
            , onde pode ser conferido na integra.
            </Text>
            <br/>  
          <TextSubtitle>
            Tempo de carregamento de páginas React
          </TextSubtitle>
            <br />
          <TextBody>
            No que diz respeito à arquitetura client-side, ou lado do cliente em tradução literal, uma vez 
            que carregamos o conteúdo temos que esperar o pacote que contém todo o JavaScript ou bundle como 
            é conhecido carregar antes de determinar o que mostrar na página. E isso torna o tempo de carregamento 
            mais alto o que acaba virando problema para pessoas com dispositivos móveis antigos e conexões fracas.
            <br/>
            Outra questão são os mecanismos de pesquisa (SEO) que ainda tem certa dificuldade para indexação de 
            aplicativos JavaScript do lado do cliente, porque o conteúdo real está embutido em algum lugar do 
            bundle gerado. Além disso os motores de busca estão preparados para pegar o HTML, o conteúdo em muitos 
            casos nem está lá porque ele só é renderizado depois de uma Chamada pro Backend, então seu SEO nesse caso 
            é inexistente.
          </TextBody>
          <BackgroundImageButton 
                image="/images/hulu.png" 
                title="o Hulu"
                url="https://www.hulu.com/welcome"
                target="_blank"
          />
            <br />
          <TextSubtitle>
            Renderização no servidor - Server Side Rendering - SSR
          </TextSubtitle>
            <br />
          <TextBody>
            Quando as pessoas perceberam que colocar muito código JavaScript no lado do cliente era um problema, 
            eles pensaram em uma alternativa para renderizar esse código no lado do servidor. E assim surgiu o 
            NextJS um framework criado em cima do ReactJS que usa a renderização do lado do servidor ou Server 
            Side Rendering popularmente conhecido como SSR.
            <br/>
            O SSR funciona da seguinte maneira, ao acessarmos um site por exemplo alura.com.br enviamos uma 
            requisição para o servidor para acessar a página inicial do site, então o servidor manda uma requisição 
            para uma rest api por exemplo pedindo essa pagina inicial. Uma vez que os dados são recebidos o servidor 
            renderiza uma página HTML com o conteúdo e envia para o cliente exibindo assim o conteúdo na página, se 
            a pessoa acessar outra rota por exemplo alura.com.br/artigos o processo continua o mesmo.
            <br/>
            Utilizando o conceito do SSR continuamos o desenvolvendo com React, o que é bom, porque podemos manter 
            a tecnologia que gostamos e a pessoa que está como visitante do nosso site obtém um documento HTML 
            simples, que no final gera um grande aumento de desempenho. E não é só isso, o NextJS ainda tem outras 
            vantagens.
          </TextBody>
          <BackgroundImageButton 
                image="/images/marvel.png" 
                title="o site da Marvel"
                url="https://www.marvel.com/"
                target="_blank"
          />
            <br />
          <TextSubtitle>
            O que o NextJS me oferece de configuração?
          </TextSubtitle>
            <br />
          <TextBody>
            Por padrão o NextJS vem com configurações otimizadas e o pessoal da Vercel está sempre atualizando 
            essas configurações pensando em melhorar nossa experiência de desenvolvimento.
            <br/>
            Por exemplo, o NextJS oferece suporte a todos os navegadores modernos prontos para uso e para o IE11. 
            Ele tem suporte para divisão de código, ou code splitting enquanto com o create react app combina 
            todos os arquivos JavaScript em um único pacote, com o next quando ao lidar com roteamento, estamos 
            apenas carregando o JavaScript usado naquela página e isso traz um ganho de performance.
            <br/>
            Ele já vem com hot reload da aplicação que apenas atualiza os arquivos que foram alterados sem perder 
            o estado do aplicativo. E tratando de aplicações ReactJS, em algum pode ser que precisemos ejetar o 
            create react app para não ter dependências não utilizadas na aplicação e fazer algumas otimizações do 
            webpack/babel.
            <br/>
            O próprio create-next-app utilizado para criar aplicações NextJS, é uma alternativa otimizada ao cra 
            e como ele já tem toda essa parte abstraída para gente, não precisamos nos preocupar com babel, webpack 
            e outras configurações que precisamos fazer para otimizar uma aplicação em ReactJS.
            <br/>
            Além dessas vantagens de configuração, o NextJS ainda tem várias vantagens no que diz respeito à experiência 
            de desenvolvimento.
          </TextBody>
      </BodyContent>
      <Footer />
   </>
  )
}
