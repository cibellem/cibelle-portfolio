import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { mediaQueries } from "../styles/GlobalStyle";
import firebaseConfig from "../utils/config";

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
//Connection to my colletions with Firebase
const db = firestore.collection("contacts");

export const FormGroup = styled.div`
  display: block;
  padding: 50px 15px;
  width: 90%;
  background: #15a374;
  border: 6px;
  border-radius: 10px;

  ${mediaQueries("md")`
  width: 75%;
  padding: 50px 60px;
  ;`};
`;

export const Message = styled.span`
  display: block;
  margin-bottom: 0.3em;
  font-size: 0.9rem;
  color: #f30000;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  width: 80%;
  margin: auto;
  cursor: pointer;
  border: none;
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
      isInput: true,
    },
    {
      value: email,
      id: "email",
      onChange: (e) => setEmail(e.target.value),
      placelholder: "Your email goes here",
      isInput: true,
    },
    {
      value: message,
      id: "message",
      onChange: (e) => setMsg(e.target.value),
      placelholder: "Your msg goes here",
      isInput: false,
    },
  ];

  return (
    <FormGroup>
      {FormProps.map((item) => (
        <section key={item.id}>
          <label htmlFor={item.id}>{item.id}</label>
          {item.isInput ? (
            <input onChange={item.onChange} value={item.value} id={item.id} />
          ) : (
            <textarea
              onChange={item.onChange}
              rows="4"
              value={item.value}
              id={item.id}
            />
          )}
        </section>
      ))}
      <Message>{!error ? null : error}</Message>
      <Button onClick={handleForm}>Submit </Button>
    </FormGroup>
  );
};

export default Form;
