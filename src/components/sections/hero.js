import * as React from "react";
import styled, { keyframes } from "styled-components";
import { mediaQueries } from "../../styles/GlobalStyle";
import Social from "../../components/social";

export const showAnimation = keyframes`
    0%{
        transform: translateY(20%);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }


;`;

export const HeroHeader = styled.h1`
  font-size: clamp(32px, 8vw, 60px);
  margin: 0;
  line-height: 1.2;
  animation: ${showAnimation} 0.5s cubic-bezier(0.7, 0, 0.1, 0.5) forwards;
  transform: translateY(100%);
`;

export const HeroSubHeader = styled.h2`
  font-size: clamp(32px, 8vw, 50px);
  margin: 0;
  line-height: 1.2;
  animation: ${showAnimation} 6s cubic-bezier(0.7, 0, 0.1, 0.5) both;
  transform: translateY(100%);
  span {
    text-decoration: line-through;
    color: #15a374;
  }
`;

const LargeText = styled.p`
  font-size: clamp(1rem, 5vw, 1.6rem);
  margin: 10px 0 0 0;
  line-height: 1.4;
  animation: ${showAnimation} 0.4s cubic-bezier(0.7, 0, 0.1, 0.5) forwards;

  ${mediaQueries("md")`
    max-width:80%
  ;`}
`;

const HeroWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;

  ${mediaQueries("md")`
  margin: 10vh 0;         
  padding: 0px 100px 

  ;`};
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <h4>Hi!</h4>
      <HeroHeader>I'm Cibelle,</HeroHeader>
      {/* <HeroSubHeader>
          a happy little <span>camper</span> developer
        </HeroSubHeader> */}
      <LargeText>
        Web Developer and JavaScript Engineer based in Phoenix/Arizona.
        Simplicity , accessibility and reusability are the goals I keep in mind
        whenever starting a new project.
      </LargeText>
      <Social />
    </HeroWrapper>
  );
};

export default Hero;
