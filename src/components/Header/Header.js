import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCodrops, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <DiCodrops size="3rem" /><Span>Umar Khosru</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#education">
          <NavLink>Education</NavLink>
        </Link>
      </li>
      <li>
        <Link href=""  >
          <NavLink onClick={() => alert("Umar Khosru Shourav's Blog is coming up...")}>Blog</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target='_blank' href="https://www.facebook.com/profile.php?id=100053965721045">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="/">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
