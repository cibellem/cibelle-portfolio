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
    line-height: 1;
  }

  ${mediaQueries("md")`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0;
  min-height: 380px;
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

export const StackHeader = styled.h4`
  font-size: 1.2rem;
  color: #15a374;
  margin: 0 0 10px 0;
  ${mediaQueries("md")`
  font-size: 1.5rem; 
  ;`}
`;

//Animation with dynamic variants . Each block has a delay of .3.
const variants = {
  hidden: {
    x: -800,
  },
  visible: (i) => ({
    x: 0,
    transition: {
      x: { type: "spring", stiffness: 50 },
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
    <SkillWrapper id="skills">
      <Shared.SectionHeader>
        <span ref={ref} className="marker">
          Tools
        </span>
      </Shared.SectionHeader>

      {skillsArr.map((item, i) => (
        <motion.div
          custom={i}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <StackDiv key={item.stack}>
            <StackHeader>{item.stack}</StackHeader>
            {item.tools.map((tool) => (
              <p>{tool}</p>
            ))}
          </StackDiv>
        </motion.div>
      ))}
    </SkillWrapper>
  );
};

export default Skills;
