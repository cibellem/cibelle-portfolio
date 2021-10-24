import * as React from "react";
import styled from "styled-components";
import cibelle from "../../assets/cibelle.png";
import { mediaQueries } from "../../styles/GlobalStyle";
import * as Shared from "../../styles/shared";

const AboutWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  gap: 20px;

  ${mediaQueries("md")`    
    margin: 20vh 0;         
    gap: 30px;
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
      <Shared.Paragraph>
        I'm Cibelle and I'm a Full Stack Javascript Developer who decided to
        make her addiction for creating mIRC scripts into a profession. I'm a
        former teacher who loves being exposed to different concepts, cultures
        and people and I found in tech a place with endless oportunities to
        pursue that.
      </Shared.Paragraph>
      <Shared.Paragraph>
        I put my heart into each and every project and my top priority is
        delivering a final product that goes above and beyond client
        expectations. I'm very much interested to add more skills to my list and
        I expect to learn and be challenged in my next roles. When not coding I
        love to hike, garden and play soccer. 😎
      </Shared.Paragraph>
    </AboutWrapper>
  );
};

export default About;
