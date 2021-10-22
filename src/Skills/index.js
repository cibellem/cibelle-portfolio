import * as React from "react";
import styled from "styled-components";

const SkillWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 10vh 0;
`;
const StackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StackDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StackHeader = styled.h4`
  font-size: 1rem;
  line-height: 2;
  margin: 0;
`;

const Tool = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

const Marker = styled.span`
  position: relative;
  &:before {
    content: "";
    background-color: #ffc00e;
    width: 100%;
    height: 1em;
    position: absolute;
    z-index: -1;
    left: -0.25em;
    top: 0.1em;
    padding: 0 0.25em;
  }
`;
const ToolstHeader = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  font-weight: 400; ;
`;

const skillsArr = [
  {
    stack: "Front End",
    tools: [
      "JavaScript (ES6)",
      "React",
      "Ionic",
      "Amplify",
      "HTML",
      "CSS/Scss",
      "Styled Components",
    ],
  },
  {
    stack: "Back End",
    tools: [
      "Node.js",
      "Express.js",
      "AWS Lambda",
      "AWS AppSync",
      "NATS Event Streaming",
      "Firebase",
      "MongoDB",
    ],
  },
];

const Skills = () => {
  return (
    <SkillWrapper>
      <ToolstHeader>
        <Marker>Tools</Marker>
      </ToolstHeader>
      <StackWrapper>
        {skillsArr.map((item) => (
          <StackDiv>
            <StackHeader>{item.stack}</StackHeader>
            {item.tools.map((i) => (
              <Tool>{i}</Tool>
            ))}
          </StackDiv>
        ))}
      </StackWrapper>
      <Tool>..to be continued</Tool>
    </SkillWrapper>
  );
};

export default Skills;
