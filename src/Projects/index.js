import * as React from "react";
import styled from "styled-components";

const ProjectSection = styled.article`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const ProjectBlock = styled.div`
  border-radius: 5px;
  padding: 20px;
  border-left: 8px solid #0ef897;
  border-top: 8px solid #0ef897;
  border-right: 2px solid #0ef897;

  border-bottom: 2px solid #0ef897;
  box-shadow: -6px -5px 0px 0px #000000c9;
  &:hover {
    transform: translateX(20px);
  }
`;

const ProjectName = styled.h5`
  font-size: 1.4rem;
  margin: 0;
`;

const ProjectText = styled.p`
  font-size: 1rem;
`;

const ProjectMiniHeader = styled.h6`
  font-size: 1rem;
  margin: 0;
`;

const ProjectSessionHeader = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;

const Projects = () => {
  let array = [1, 2, 3];

  return (
    <ProjectSection>
      <ProjectSessionHeader>Some Projects I worked on</ProjectSessionHeader>

      {array.map((item) => (
        <ProjectBlock>
          <ProjectMiniHeader>Featured Project</ProjectMiniHeader>
          <ProjectName>Project Name</ProjectName>
          <ProjectText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            doloremque porro sapiente accusantium nulla, adipisci excepturi
            iusto, vero unde voluptates magnam alias! Obcaecati dicta
            doloremque, totam quae ullam doloribus saepe!
          </ProjectText>
        </ProjectBlock>
      ))}
    </ProjectSection>
  );
};
export default Projects;
