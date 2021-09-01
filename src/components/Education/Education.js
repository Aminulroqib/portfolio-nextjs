import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Education = () => (

  <Section id="education">
    <SectionTitle>Education</SectionTitle>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2A3956', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #2A3956' }}
        date="2020 - present"
        iconStyle={{ background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6) 100%', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title mb-2">Chittagong University</h3>
        <h5 className="vertical-timeline-element-subtitle">BBA(HRM)</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quos.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2A3956', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #2A3956' }}
        date="2018"
        iconStyle={{ background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6) 100%', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title mb-2">Chittagong Cantonment Public College</h3>
        <h5 className="vertical-timeline-element-subtitle">Higher Secondary</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quos.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2A3956', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #2A3956' }}
        date="2016"
        iconStyle={{ background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6) 100%', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title mb-2">Chittagong Collegiate School</h3>
        <h5 className="vertical-timeline-element-subtitle">Secondary</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quos.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </Section>
  // <Section>
  //   <SectionTitle>Personal Achievements</SectionTitle>
  //   <Boxes>
  //     {data.map((card, index) => (
  //       <Box key={index}>
  //         <BoxNum>{`${card.number}+`}</BoxNum>
  //         <BoxText>{card.text}</BoxText>
  //       </Box>
  //     ))}
  //   </Boxes>
  //   <SectionDivider/>
  // </Section>
);

export default Education;
