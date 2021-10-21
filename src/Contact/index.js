import * as React from "react";
import styled from "styled-components";
import Form from "../Form";

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
`;

const Marker = styled.span`
  position: relative;
  &:before {
    content: "";
    background-color: #ffc00e;
    width: 100%;
    height: 1em;
    position: absolute;
    z-index: -1;
    left: -0.25em;
    top: 0.1em;
    padding: 0 0.25em;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactHeader>
        <Marker>Reach out!</Marker>
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
