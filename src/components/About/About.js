import React from 'react';
import Link from 'next/link';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from '../Education/AcomplishmentsStyles';
import Button from '../../styles/GlobalComponents/Button';
import { projects } from '../../constants/constants';


const About = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>About Me</SectionTitle>
    <div className="row">
      <div className="col-md-6 order-1 order-lg-2 text-white d-flex justify-content-center flex-column abt-text-section">
      <SectionTitle>Hi {''}<span className='exclaim'>!</span></SectionTitle>
        <SectionText>
          I'm Umar Khosru Sourav, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, voluptatibus! Illo, tenetur atque iure, sint mollitia quas earum unde officiis possimus, ut nostrum? Blanditiis qui, obcaecati tempora quas pariatur ipsa.
          </SectionText>
          <Link href="#education">
            <Button>Education</Button>
          </Link>
          
      </div>
        <div className="col-lg-6 order-2 order-lg-1 header-img photo">
        <div className="m-2 mt-3">
          <img className="img-fluid card" style={{background:'#212D45', borderRadius:'20px', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} width="500px" src='https://i.im.ge/2021/09/01/Q1dCyz.png' alt="" />
        </div>
      </div>

    </div>

  </Section >
);

export default About;