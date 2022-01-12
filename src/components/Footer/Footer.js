import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:9545605262">(91)-9545605262</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:patilshubham821@gmail.com">patilshubham821@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/shubhampatil-7" target="_blank">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/shubham-patil-773b641a5/" target="_blank">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://twitter.com/s_h_u_b_h_a_m1" target="_blank">
            <AiFillTwitterCircle size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
