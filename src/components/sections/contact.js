import * as React from "react";
import Form from "../form";
import styled from "styled-components";
import { mediaQueries } from "../../styles/GlobalStyle";
import * as Shared from "../../styles/shared";

const ContactWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  gap: 20px;

  ${mediaQueries("md")`
   padding: 0 50px;  
  ;`}
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0;
  width: 100%;

  ${mediaQueries("md")`    
    line-height: 1.2; 
    margin: auto;
    padding:20px;
    width: 70%;
   

  ;`}
`;
const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <Shared.SectionHeader>
        <span style={{ color: " #d4d4d4" }} className="marker">
          Reach out!
        </span>
      </Shared.SectionHeader>
      <Text>Interested in colaborating ? Drop me a message!</Text>
      <Form />
    </ContactWrapper>
  );
};

export default Contact;
