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
    font-size: 1.1rem;
    padding: 0px 0px;
    margin: 0;

    ${mediaQueries("md")`
      padding: 10px 70px;
      line-height:1.4;
      max-width: 980px;
      font-size: 1.4rem;
   
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
      <Shared.SectionHeader>About Me</Shared.SectionHeader>
      <img src={cibelle} alt="Cibelle's Headshot" />
      <p>
        Hey, and really nice to meet you. I'm Cibelle and I'm a Full Stack Web
        Developer who decided to make her addiction for creating mIRC scripts
        into a profession. It has been a fun ride and I got to work on nice
        projects which and incredible people. I am curious by nature and love
        being exposed to different "stuff" and I found in tech a place with
        endless oportunities to pursue that.
      </p>
      <p>
        I love tinkering around and I'm very much interested to add more skills
        to my list. I do expect to learn and be challenged in every project. I'm
        super active and when I'm not in front of my compiter I enjoy hiking and
        playing soccer.
      </p>
    </AboutWrapper>
  );
};

export default About;
