import * as React from "react";
import styled from "styled-components";
import cibelle from "./cibelle.png";
import { mediaQueries } from "../globalStyles";

const AboutWrapper = styled.article`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  gap: 20px;

  ${mediaQueries("md")`
    display: flex;
    margin: 20vh 0;         
    gap: 30px;
    padding: 40px 100px
 
  `}
`;

const AboutHeader = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  font-weight: 400;
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0;
  text-indent: 20px;
  ${mediaQueries("md")`
    font-size: 1.2rem;
    text-indent: 0px;
    line-height:1.2;
    max-widht: 90%;
  
    
  `}
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutHeader>
        <span className="marker"> About Me...</span>
      </AboutHeader>

      <img src={cibelle} alt="Cibelle's Headshot" />
      <Text>
        I'm Cibelle and I'm a Full Stack Javascript Developer who decided to
        make her addiction for creating mIRC scripts into a profession. I'm a
        former teacher who loves being exposed to different concepts, cultures
        and people and I found in tech a place with endless oportunities to
        pursue that.
      </Text>
      <Text>
        I put my heart into each and every project and my top priority is
        delivering a final product that goes above and beyond client
        expectations. I'm very much interested to add more skills to my list and
        I expect to learn and be challenged in my next roles. When not coding I
        love to hike, garden and play soccer. 😎
      </Text>
    </AboutWrapper>
  );
};

export default About;
