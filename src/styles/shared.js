import styled from "styled-components";
import { mediaQueries } from "./GlobalStyle";

export const SectionHeader = styled.h3`
  font-size: 1.8rem;
  text-align: center;
  margin: 0;
  font-weight: 400;
  ${mediaQueries("md")`
  font-size: 2.5rem
    `}
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 0;

  ${mediaQueries("md")`
    font-size: 1.2rem;    
    line-height:1.2;
    max-widht: 90%; 
    
  `}
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  width: 80%;
  margin: auto;
  border-radius: 47px;
  background: white;
  box-shadow: -1px 6px 0px 0px;
  &:hover {
    box-shadow: -1px 3px 0px 0px;
    transition: ease-in-out 0.3s;
    background-color: #15a374;
  }
`;

export const ResumeButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
  color: black;
  box-shadow: none;
  border: 3px solid #15a374;
  &:hover {
    box-shadow: none;
    transition: ease-in-out 0.3s;
    background-color: #15a374;
    color: white;
  }
`;
