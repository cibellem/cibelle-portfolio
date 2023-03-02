import * as React from "react";
import styled from "styled-components";
import { jobs } from "../../utils/data";
import { mediaQueries } from "../../styles/GlobalStyle";
import * as Shared from "../../styles/shared";

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
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 10%;
  align-items: baseline;
  margin 40px 0 0 0 
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

  //   ${mediaQueries("md")`   
//    min-width: 330px;
//    height: 100%;
//    display: table;
//    width: 100%;
//    margin: auto;
 
//   `};
`;

export const JobName = styled.h5`
  font-size: 1.4rem;
  margin: 0 0 10px 0;
  color: #008000ba;
`;

export const JobDescription = styled.p`
  font-size: 1.4rem;
  margin-top: 20px !important;

  ${mediaQueries("md")`
  font-size: 1.4rem
  max-width: 800px;

  ;`};
`;

const Jobs = () => {
  return (
    <JobsWrapper id="jobs">
      <Shared.SectionHeader>
        <span className="marker"> Experience</span>
      </Shared.SectionHeader>
      <JobGrid>
        <h2>
          I have had the opportunity to work at a marketing agency,a startup,
          and mostly recent at a big corporation. I built dashboards, user
          portals, microservices, and more. It has been a fun ride and I got to
          work with many technologies and incredible people. I consider myself a
          JavaScript developer, but I have also worked with Python.
        </h2>
        <div>
          {jobs.map((job) => (
            <JobBox>
              <JobName>
                {job.company} | {job.position}
              </JobName>
              <span>{job.date}</span>
              <JobDescription>{job.description}</JobDescription>
            </JobBox>
          ))}
        </div>
      </JobGrid>
    </JobsWrapper>
  );
};

export default Jobs;
