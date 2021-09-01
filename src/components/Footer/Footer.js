import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:++8801882-798773"><h4>+8801882-798773</h4></LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="umarkhosru@gmail.com">
          <h4>umarkhosru@gmail.com</h4>
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Stuck, Struggle, Patience is the key to success</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons target='_blank' href="https://www.facebook.com/profile.php?id=100053965721045">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
