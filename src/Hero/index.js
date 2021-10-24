import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  mediaQueries,
  HeroHeader,
  HeroSubHeader,
  HeaderFour,
  LargeText,
} from "../globalStyles";

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

  ${mediaQueries("md")`
  max-width: 1000px;
  ;`}

  span {
    text-decoration: line-through;
    color: #15a374;
  }
`;

const Hero = () => {
  return (
    <motion.div
      opacity={0}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <HeroWrapper>
        <HeaderFour>Hi, my name is</HeaderFour>
        <HeroHeader>Cibelle Montor..</HeroHeader>
        <HeroSubHeader>
          a happy little <span>camper</span> developer
        </HeroSubHeader>
        <LargeText>
          I’m a Software Engineer specialized in building Front and Backend
          applications. I love building scalable, out of the box and
          straightforward solutions.{" "}
        </LargeText>
      </HeroWrapper>
    </motion.div>
  );
};

export default Hero;
