import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { mediaQueries } from "../styles/GlobalStyle";
// import firestore from "@firebase/firestore";

let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "contact-form-portfolio-61dfa.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: "contact-form-portfolio-61dfa",
  storageBucket: "contact-form-portfolio-61dfa.appspot.com",
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
//Connection to my colletions with Firebase
const db = firestore.collection("contacts");

export const FormGroup = styled.div`
  display: block;
  width: 90%;
  background: #15a374;
  border: 6px;
  padding: 50px 15px;
  border-radius: 10px;

  ${mediaQueries("md")`
  width: 75%;
  padding: 50px 60px;
  ;`};
`;

export const Message = styled.span`
  margin-bottom: 0.3em;
  font-size: 0.9rem;
  display: block;
  color: white;
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

const Form = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");
  const [error, setError] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();

    if (!username || !email || !message) {
      setError("I need a little bit more of info");
    } else {
      db.doc()
        .set({
          username,
          email,
          message,
          created: new Date(),
        })
        .then(() => {
          setError("Msg sent!I will get back to you soon");
          setTimeout(function () {
            setError(null);
            setName("");
            setEmail("");
            setMsg("");
            Array.from(document.querySelectorAll("input")).forEach(
              (input) => (input.value = "")
            );
          }, 2000);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const FormProps = [
    {
      value: username,
      id: "name",
      onChange: (e) => setName(e.target.value),
      placelholder: "Your name goes here",
    },
    {
      value: email,
      id: "email",
      onChange: (e) => setEmail(e.target.value),
      placelholder: "Your email goes here",
    },
    {
      value: message,
      id: "message",
      onChange: (e) => setMsg(e.target.value),
      placelholder: "Your msg goes here",
    },
  ];

  return (
    <FormGroup>
      {FormProps.map((item) => (
        <section key={item.id}>
          <label htmlFor={item.id}>{item.id}</label>
          <input onChange={item.onChange} value={item.value} id={item.id} />
        </section>
      ))}
      <Message>{!error ? null : error}</Message>
      <Button onClick={handleForm}>Submit </Button>
    </FormGroup>
  );
};

export default Form;
