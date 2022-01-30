import { Image } from '@chakra-ui/react';

import { Footer } from '../components/Footer';
import { Head } from '../components/Head';
import { SubMenu } from '../components/SubMenu';
import TextTitle from '../components/TextTitle';
import BodyContent from '../components/BodyContent';
import { SubMenuItem } from '../components/SubMenu/SubMenuItem';
import { Objective } from '../components/Principalblocks/Objective';
import { Productivity } from '../components/Principalblocks/Productivity';
import { Responsiveness } from '../components/Principalblocks/Responsiveness';

export default function Home() {

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
          display={["unset", "unset"]}
          margin={["1rem auto","2rem auto"]}
          justifyContent="center"
          objectFit="cover"
          src={"/images/principal.png"}
          width={["80%","60%"]}
          alt="React Space"
          borderRadius="4px"
        />
        <br/>
        
          <Objective />

          <Productivity />
        
          <Responsiveness />
      </BodyContent>
      <Footer />
   </>
  )
}
