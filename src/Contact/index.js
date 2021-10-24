import * as React from "react";

import Form from "../Form";
import { ContactWrapper, ContactHeader, Text } from "./Styles";
import resume from "../Assets/cibelle-resume.pdf";
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
      <a target="_blank" rel="noopener noreferrer" href={resume}>
        <button>Resume</button>
      </a>
    </ContactWrapper>
  );
};

export default Contact;
