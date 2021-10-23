import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const ProjectSection = styled.article`
  display: flex;
  gap: 30px;
  flex-direction: column;
  ${mediaQueries("md")`
    display: grid;      
    margin: auto;   
    grid-template-columns: 34ch auto 33ch;
    justify-self: center;
    align-self: inherit;
    justify-items: center;
    align-items: center;
  `}
`;

export const ProjectBlock = styled.div`
  border-radius: 5px;
  padding: 20px;
  border-left: 8px solid #0ef897;
  border-top: 8px solid #0ef897;
  border-right: 2px solid #0ef897;

  border-bottom: 2px solid #0ef897;
  box-shadow: -6px -5px 0px 0px #000000c9;

  ${mediaQueries("md")`
    width: 350px;
   &:hover {
    transform: translate(1px, -40px);
  }
  `}
`;

export const ProjectName = styled.h5`
  font-size: 1.4rem;
  margin: 0;
`;

export const ProjectText = styled.p`
  font-size: 1rem;
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
  width: 100%;
  opacity: 0.9;
`;

export const GitIcon = styled.img`
  cursor: pointer;
  text-align: center;
  float: right;
`;
