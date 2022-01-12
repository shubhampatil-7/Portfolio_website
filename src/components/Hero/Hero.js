import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Shubham Patil<br />
        
      </SectionTitle>
      <SectionText>
        A developer with a goal to improve atleast 1% everyday.
      </SectionText>
      <Button onClick={() => window.open("https://twitter.com/s_h_u_b_h_a_m1" , "_blank") }>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;