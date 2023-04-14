import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import * as Shared from "../../styles/shared";
import { skillsArr } from "../../utils/data";
import { mediaQueries } from "../../styles/GlobalStyle";
import { useInView } from "react-intersection-observer";

const SkillWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 10vh 0;
  line-height: 1.3;

  p {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-size: 1.1rem;
  }

  ${mediaQueries("md")`
  font-size: 1.4rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 100px 0;
  min-height: 380px;      
  padding: 0px 250px 

  ;`}
`;

export const StackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 40px 0;
`;

export const StackDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const StackHeader = styled.h3`
  font-size: 1.2rem;
  color: var(--purpleDetails);
  margin: 0 0 10px 0;
  ${mediaQueries("md")`
  font-size: 1.5rem; 
  ;`}
`;

//Animation with dynamic variants . Each block has a delay of .3.
const variants = {
  hidden: {
    y: 0,
  },
  visible: (i) => ({
    y: 0,
    transition: {
      y: { type: "spring", stiffness: 100 },
      duration: 1,
      delay: i * 0.9,
    },
  }),
};

const Skills = () => {
  const controls = useAnimation();
  //Watchs if element is in view
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Shared.SectionHeader>Tools</Shared.SectionHeader>
      <SkillWrapper id="skills">
        {skillsArr.map((item, i) => (
          <StackDiv key={item.stack}>
            <StackHeader>{item.stack}</StackHeader>
            {item.tools.map((tool) => (
              <p>{tool}</p>
            ))}
          </StackDiv>
        ))}
      </SkillWrapper>
    </>
  );
};

export default Skills;
