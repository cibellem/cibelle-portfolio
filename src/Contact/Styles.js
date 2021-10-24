import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const ContactWrapper = styled.article`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  gap: 20px;

  ${mediaQueries("md")`
   padding: 0 50px;
  
  ;`}
`;

export const ContactHeader = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  font-weight: 400;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0;
  ${mediaQueries("md")` 
    font-size: 1.1rem;
    line-height: 1.2;
    width: 50%;
    margin: auto;
    text-align: center;

  ;`}
`;
