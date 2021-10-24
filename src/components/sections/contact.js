import * as React from "react";
import Form from "../form";
import styled from "styled-components";
import { mediaQueries } from "../../styles/GlobalStyle";
import resume from "../../assets/cibelle-resume.pdf";
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
      <Shared.SectionHeader>
        <span className="marker">Reach out!</span>
      </Shared.SectionHeader>
      <Text>
        Interested in colaborating or just want to tell me you hate/love my
        website? Drop me a message!
      </Text>
      <Form />

      <div>
        <a href={resume}>
          <Shared.ResumeButton>Resume</Shared.ResumeButton>
        </a>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
