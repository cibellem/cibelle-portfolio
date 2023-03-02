import * as React from "react";
import styled from "styled-components";
import cibelle from "../../assets/cibelle.png";
import { mediaQueries } from "../../styles/GlobalStyle";
import * as Shared from "../../styles/shared";

const AboutWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  gap: 20px;

  img {
    padding: 20px;
    max-width: 200px;
    ${mediaQueries("md")`    
     max-width: 250px;
  `}
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2;
    padding: 0px 0px;
    margin: 0;

    ${mediaQueries("md")`
      padding: 10px 70px;
      line-height:1.3;
   
  `}
  }

  ${mediaQueries("md")`    
    margin: 20vh 0;         
    padding: 0px 40px 
  `}
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <Shared.SectionHeader>
        <span className="marker"> About Me...</span>
      </Shared.SectionHeader>
      <img src={cibelle} alt="Cibelle's Headshot" />
      <p>
        Hey, and really nice to meet you. I'm Cibelle and I'm a Full Stack Web
        Developer who decided to make her addiction for creating mIRC scripts
        into a profession. I have had the opportunity to work at a{" "}
        <a href="https://littletaller.com/">marketing agency,</a>a{" "}
        <a href="https://www.cyberdive.co/">startup</a>, and mostly recent at a
        <a href="https://www.microsoft.com/en-us/">big corporation</a>. It has
        been a fun ride and I got to work on nice projects which I am proud of.
        I am curious by nature and love being exposed to different concepts,
        cultures and people and I found in tech a place with endless
        oportunities to pursue that.
      </p>
      <p>
        I have wroked on projects with tools such as React, Node and AWS. I love
        tinkering around and I'm very much interested to add more skills to my
        list. I do expect to learn and be challenged in my next roles. I spend a
        lot of my time coding but when not doing it I I love to hike, garden and
        play soccer. 😎
      </p>
    </AboutWrapper>
  );
};

export default About;
