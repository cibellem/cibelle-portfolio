import * as React from "react";
import styled from "styled-components";
import Form from "../Form";
import { mediaQueries } from "../globalStyles";

const ContactWrapper = styled.article`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  margin: 10vh 0;
  gap: 20px;
`;

const ContactHeader = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  font-weight: 400;
`;

const Text = styled.p`
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

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactHeader>
        <span className="marker">Reach out!</span>
      </ContactHeader>
      <Text>
        Interested in colaborating or just want to tell me you hate/love my
        website? Drop me a message!
      </Text>
      <Form />
    </ContactWrapper>
  );
};

export default Contact;
