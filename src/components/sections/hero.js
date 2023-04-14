import * as React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
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
  animation: ${showAnimation} 1s cubic-bezier(0.7, 0, 0.1, 0.5) both;
  transform: translateY(100%);
  span {
    color: var(--purpleDetails);
  }
`;

const LargeText = styled.p`
  font-size: clamp(1rem, 5vw, 1.6rem);

  margin: 10px 0 0 0;
  line-height: 1.4;
  animation: ${showAnimation} 1.2s cubic-bezier(0.7, 0, 0.1, 0.5) forwards;
  ${mediaQueries("md")`
    max-width:80%
  ;`}
`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
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
        <h4>Hi!</h4>
        <HeroHeader>I'm Cibelle...</HeroHeader>
        <HeroSubHeader>
          I'm a Developer based in <span>Arizona 🏜</span>
        </HeroSubHeader>
        <LargeText>
          I specialized in building Web Applications. I focus on building
          accessible, out of the box and straightforward solutions.
        </LargeText>
        <Social />
      </HeroWrapper>
    </motion.div>
  );
};

export default Hero;
