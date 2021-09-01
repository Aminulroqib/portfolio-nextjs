import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
       Hello! <br/>
        I'm Umar Khosru Sourav
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, placeat.
      </SectionText>
      <Button>My Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;