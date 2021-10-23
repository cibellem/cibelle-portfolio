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
    margin: auto;    
    -ms-flex-item-align: inherit;    
    -ms-flex-align: center;
    justify-items: self-start;
    justify-content: stretch;
    justify-self: start;
    flex-direction: revert;
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
    
  `}
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutHeader>
        <span className="marker"> About Me...</span>
      </AboutHeader>

      <img src={cibelle} alt="" />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        dolore ipsa excepturi ullam, nemo earum dicta minima animi cumque
        necessitatibus, incidunt quos veniam esse aliquam officiis quod
        laudantium recusandae? Fuga!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        dolore ipsa excepturi ullam, nemo earum dicta minima animi cumque
        necessitatibus, incidunt quos veniam esse aliquam officiis quod
        laudantium recusandae? Fuga!
      </Text>
    </AboutWrapper>
  );
};

export default About;
