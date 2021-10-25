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
    font-size: 1.2rem;
    line-height: 1.2;
    width: 70%;
    margin: auto;
    padding:20px;
    text-align: center;

  ;`}
`;
const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <Shared.SectionHeader>
        <span className="marker">Reach out!</span>
      </Shared.SectionHeader>
      <Text>
        Interested in colaborating or just want to tell me you hate/love my
        website? Drop me a message!
      </Text>
      <Form />
    </ContactWrapper>
  );
};

export default Contact;
