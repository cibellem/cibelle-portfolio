import * as React from "react";
import styled from "styled-components";
import { skillsArr } from "../../utils/data";
import { mediaQueries } from "../../styles/GlobalStyle";
import * as Shared from "../../styles/shared";

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

const Skills = () => {
  return (
    <SkillWrapper id="skills">
      <Shared.SectionHeader>
        <span className="marker">Tools</span>
      </Shared.SectionHeader>
      {skillsArr.map((item) => (
        <StackDiv key={item.stack}>
          <StackHeader>{item.stack}</StackHeader>
          {item.tools.map((tool) => (
            <p>{tool}</p>
          ))}
        </StackDiv>
      ))}
    </SkillWrapper>
  );
};

export default Skills;
