import * as React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  font-family: "Josefin Sans";
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;
`;

const SmallHeader = styled.h4`
  font-family: "Josefin Sans";
  font-size: 1rem;
  color: black;
  margin: 0 0 10px 0;
  line-height: 1.2;
`;

const Header = styled.h1`
  font-size: clamp(32px, 8vw, 60px);
  color: black;
  margin: 0;
  line-height: 1.2;
`;

const SubHeader = styled.h2`
  font-size: clamp(32px, 8vw, 60px);
  white-space: nowrap;
  color: black;
  margin: 0;
  line-height: 1.2;
`;

const Text = styled.p`
  font-family: "Josefin Sans";
  font-size: 1rem;
  color: black;
  margin: 10px 0 0 0;
  line-height: 1.4;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <SmallHeader>Hi, my name is</SmallHeader>
      <Header>Cibelle Montor..</Header>
      <SubHeader>Coding is my passion</SubHeader>
      <Text>
        I’m a Software Engineer specialized in building Front and Backend
        applications. I love building scalable, out of the box and
        straightforward solutions.{" "}
      </Text>
    </HeroWrapper>
  );
};

export default Hero;
