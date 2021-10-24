import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

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
  box-shadow: -6px -5px 0px 0px #000000c9;

  ${mediaQueries("md")`   
   width: 90%;
   min-width: 330px;
   height: 100%;
   &:hover {
    background:#0ef897;
    transition: ease-in 1.5s;
    
  }
  `}
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
  width: 90%;
  opacity: 0.9;
`;

export const GitIcon = styled.img`
  cursor: pointer;
  text-align: center;
  float: right;
`;
