import * as React from "react";
import styled from "styled-components";
import cibelle from "./cibelle.png";

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
`;

const Underline = styled.span`
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/78779/star.svg");
  background-position: 0 1.06em;
  background-repeat: repeat-x;
  background-size: 10px 9px;
  color: #f2f3f8; ;
`;

const Marker = styled.span`
  position: relative;
  &:before {
    content: "";
    background-color: #31c5878c;
    width: 100%;
    height: 1em;
    position: absolute;
    z-index: -1;
    left: -0.25em;
    top: 0.1em;
    padding: 0 0.25em;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutHeader>
        <Marker> About Me...</Marker>

        <Underline />
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
