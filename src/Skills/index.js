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
  justify-content: space-evenly;
  margin: 40px 0;
`;

const StackDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StackHeader = styled.h4`
  font-size: 1rem;
  margin: 0;
`;

const Tool = styled.p`
  font-size: 1rem;
  margin: 0;
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
      "NATS Streaming",
      "Firebase",
      "MongoDB",
    ],
  },
];

const Skills = () => {
  return (
    <SkillWrapper>
      <ToolstHeader>
        <span className="marker">Tools</span>
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
    </SkillWrapper>
  );
};

export default Skills;
