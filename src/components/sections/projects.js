import * as React from "react";
import styled, { keyframes } from "styled-components";
import github from "../../assets/github.png";
import { projectsArr } from "../../utils/data";
import { mediaQueries } from "../../styles/GlobalStyle";

export const scaleUp = keyframes`
    0%{
        transform: scale(0.5);
        opacity: 0;
    }
    100%{
        transform: scale(1);
       
        opacity: 1;
    }
;`;

export const ProjectSection = styled.article`
  display: flex;
  gap: 30px;
  flex-direction: column;
  flex-flow: wrap;
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
  border-radius: 5px;
  padding: 20px;
  border-left: 8px solid #15a374;
  border-top: 8px solid #15a374;
  border-right: 2px solid #15a374;
  border-bottom: 2px solid #15a374;
  border: 2px 3px 4px 5px solid red;
  box-shadow: -6px -5px 0px 0px #01030cd2;
  animation: ${scaleUp} 0.9s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries("md")`   
   width: 80%;
   min-width: 330px;
   height: 100%;
   &:hover {  
    transition: ease-in 1.1s;
    -webkit-transition: ease-in 1.1s;
    transition: ease-in 1.1s;
    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/330px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg);
    position: static;
    background-repeat: repeat-x;
    background-position: center;
    
  }
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

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <ProjectSessionHeader>
        {" "}
        <span className="marker">Sample Projects </span>
      </ProjectSessionHeader>
      {projectsArr.map((item) => (
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
      ))}
    </ProjectSection>
  );
};
export default Projects;
