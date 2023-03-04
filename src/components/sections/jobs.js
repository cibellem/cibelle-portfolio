import React, { useEffect } from "react";
import styled from "styled-components";
import { jobs } from "../../utils/data";
import { mediaQueries } from "../../styles/GlobalStyle";
import * as Shared from "../../styles/shared";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const JobsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  gap: 20px;
  

  }

  
`;

const JobGrid = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1%;
  align-items: baseline;
  margin 40px 0 0 0;



  ${mediaQueries("md")` 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  gap: 1%;
  align-items: baseline;
  margin 40px 0 0 0;
  
  `}
`;

export const JobBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border-radius: 5px;
  border-left: 8px solid #15a374;
  border-top: 8px solid #15a374;
  border-right: 2px solid #15a374;
  border-bottom: 2px solid #15a374;
  border: 2px 3px 4px 5px solid red;
  box-shadow: -6px -5px 0px 0px #01030cd2;
  margin: 0 0 20px 0;

  ${mediaQueries("md")`   
   min-width: 330px;
   height: 100%;
   display: table;
   width: 100%;
   margin: auto;
 
  `};
`;

export const JobName = styled.h5`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  color: #b630e18f;
`;

export const JobDescription = styled.p`
  // font-size: 1.4rem;
  margin-top: 20px !important;

  ${mediaQueries("md")`
  // font-size: 1.4rem
  max-width: 800px;

  ;`};
`;

//Animation with dynamic variants . Each block has a delay of .3.
const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.4,
    },
  }),
};

const Jobs = () => {
  const controls = useAnimation();
  //Watchs if element is in view
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <JobsWrapper id="jobs">
      <Shared.SectionHeader>
        <span style={{ color: " #d4d4d4" }} ref={ref} className="marker">
          Experience
        </span>
      </Shared.SectionHeader>
      <JobGrid>
        {/* <h2>
          I have had the opportunity to work at a marketing agency,a startup,
          and mostly recent at a big corporation. I built dashboards, wrote test
          cases, engineered user portals, scaled up microservices, and obviously
          broke and fix several things. I'm passionate about what I do and being
          better ever day is my ultimate professional goal. It has been a fun
          ride and I got to work with many technologies and incredible people. I
          consider myself a JavaScript developer, but I have also worked with
          Python.
        </h2> */}
        {jobs.map((job, i) => (
          <motion.div
            custom={i}
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <JobBox>
              <JobName>
                {job.company} | {job.position}
              </JobName>
              <span>{job.date}</span>
              <JobDescription>{job.description}</JobDescription>
            </JobBox>
          </motion.div>
        ))}
      </JobGrid>
    </JobsWrapper>
  );
};

export default Jobs;
