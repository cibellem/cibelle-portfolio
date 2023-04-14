import React from "react";
import styled from "styled-components";
import { jobs } from "../../utils/data";
import { mediaQueries } from "../../styles/GlobalStyle";
import * as Shared from "../../styles/shared";
import { FaRocket } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const JobsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  gap: 20px;
  
  }

  
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
  margin-top: 20px !important;

  ${mediaQueries("md")`
  max-width: 800px;

  ;`};
`;

const VerticalTimelineWrapper = styled.div`
  margin: 0;

  ${mediaQueries("md")`
  margin: 200px 0;

  ;`}
`;

const Jobs = () => {
  return (
    <>
      <JobsWrapper id="jobs">
        <Shared.SectionHeader>Experience</Shared.SectionHeader>
        <p>
          I have had the opportunity to work at a marketing agency,a startup,
          and mostly recent at a big corporation. I built dashboards, wrote test
          cases, engineered user portals, scaled up microservices, and obviously
          broke and fix several things. I'm passionate about what I do and being
          better ever day is my ultimate professional goal. It has been a fun
          ride and I got to work with many technologies and incredible people.
        </p>
      </JobsWrapper>
      <VerticalTimelineWrapper>
        {jobs.map((job, i) => (
          <VerticalTimeline lineColor="var(--charcoal)">
            <VerticalTimelineElement
              position={job.pos}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f1defa",
              }}
              contentArrowStyle={{
                borderRight: "8px solid var(--purpleDetails)",
              }}
              date={job.date}
              icon={<FaRocket />}
              iconStyle={{
                background: "var(--deepPurple)",
                color: "var(--pink)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {job.position}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {job.company}
              </h4>
              <p>{job.description}</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        ))}
      </VerticalTimelineWrapper>
    </>
  );
};

export default Jobs;
