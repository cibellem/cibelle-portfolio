import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import github from "../../assets/github.png";
import { projectsArr } from "../../utils/data";
import { mediaQueries } from "../../styles/GlobalStyle";
import { useInView } from "react-intersection-observer";

export const ProjectSection = styled.article`
  display: flex;
  gap: 30px;
  flex-direction: column;
  flex-flow: wrap;

  a:nth-child(2) {
    color: green;
    display: flex;
    margin-top: 10px;
    font-size: 1.125rem;

    &:hover {
      color: #008000ba;
    }
  }

  ${mediaQueries("xl")`         
    margin: auto;
    display:grid;   
    width:100%;  
    justify-items: center;
    align-items: center;
    padding: 40px 80px
  `}
`;
export const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  border-left: 8px solid #15a374;
  border-top: 8px solid #15a374;
  border-right: 2px solid #15a374;
  border-bottom: 2px solid #15a374;
  border: 2px 3px 4px 5px solid red;
  box-shadow: -6px -5px 0px 0px #01030cd2;

  ${mediaQueries("md")`   
   width: 80%;
   min-width: 330px;
   height: 100%;
  `};
`;

export const ProjectName = styled.h5`
  font-size: 1.4rem;
  margin: 0;
`;

export const ProjectText = styled.p`
  font-size: 1rem;

  ${mediaQueries("md")`
  font-size: 1.2rem
  max-width: 800px;
  ;`}
`;

export const ProjectMiniHeader = styled.h6`
  font-size: 1rem;
  margin: 0;
`;

export const ProjectSessionHeader = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  grid-area: 1/ 1 / span 1 / span 2;
  ${mediaQueries("md")`
  font-size: 2.5rem
    `}
`;

export const ProjectImg = styled.img`
  width: 80%;
  opacity: 0.9;
  margin: auto;
`;

export const GitIcon = styled.img`
  cursor: pointer;
  text-align: center;
  float: right;
`;

//Animation with dynamic variants . Each block has a delay of .3.
const variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
    },
  }),
};

const Projects = () => {
  const controls = useAnimation();
  //Watchs if element is in view
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <ProjectSection id="projects">
      <ProjectSessionHeader>
        {" "}
        <span className="marker">Sample Projects </span>
      </ProjectSessionHeader>
      {projectsArr.map((item, i) => (
        <motion.div
          ref={ref}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <ProjectBlock key={item.title}>
            <ProjectMiniHeader>{item.type}</ProjectMiniHeader>
            <ProjectName>{item.title}</ProjectName>
            <ProjectImg src={item.img} />
            <ProjectText>{item.description}</ProjectText>

            <section>
              <a target="_blank" rel="noreferrer" href={item.github}>
                <GitIcon src={github} />
              </a>
              <a href={item.app} rel="noreferrer" target="_blank">
                Learn More
              </a>
            </section>
          </ProjectBlock>
        </motion.div>
      ))}
    </ProjectSection>
  );
};
export default Projects;
