import * as React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";
import { mediaQueries } from "../../styles/GlobalStyle";

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
  color: ${theme.black};
  margin: 0;
  line-height: 1.2;
  animation: ${showAnimation} 0.5s cubic-bezier(0.7, 0, 0.1, 0.5) forwards;
  transform: translateY(100%);
`;

export const HeroSubHeader = styled.h2`
  font-size: clamp(32px, 8vw, 50px);
  color: ${theme.black};
  margin: 0;
  line-height: 1.2;
  animation: ${showAnimation} 1s cubic-bezier(0.7, 0, 0.1, 0.5) both;
  transform: translateY(100%);
  span {
    text-decoration: line-through;
    color: #15a374;
  }
`;

const LargeText = styled.p`
  font-size: clamp(1rem, 5vw, 1.6rem);
  color: ${theme.black};
  margin: 10px 0 0 0;
  line-height: 1.4;
  animation: ${showAnimation} 1.2s cubic-bezier(0.7, 0, 0.1, 0.5) forwards;

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
  padding: 0px;
  ${mediaQueries("md")`
 
 	max-width: 1000px;
  ;`};
`;

const Hero = () => {
  return (
    <motion.div
      opacity={0}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <HeroWrapper>
        <h4>Hi, my name is</h4>
        <HeroHeader>Cibelle Montor...</HeroHeader>
        <HeroSubHeader>
          a happy little <span>camper</span> developer
        </HeroSubHeader>
        <LargeText>
          I’m a Software Engineer specialized in building Web Applications. I
          love building scalable, out of the box and straightforward solutions.
        </LargeText>
      </HeroWrapper>
    </motion.div>
  );
};

export default Hero;
