import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import firestore from "@firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyC52PAOtRTH6rW1ENR51KdSsSnKZTGqFGE",
  authDomain: "contact-form-portfolio-61dfa.firebaseapp.com",
  databaseURL: "https://contact-form-portfolio-61dfa.firebaseio.com",
  projectId: "contact-form-portfolio-61dfa",
  storageBucket: "contact-form-portfolio-61dfa.appspot.com",
  messagingSenderId: "808342677893",
  appId: "1:808342677893:web:8047798b7e9e93fb2e3cec",
  measurementId: "G-975E7P66D1",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
//Connection to my colletions with Firebase
const db = firestore.collection("contacts");

export const FormGroup = styled.div`
  display: block;
  width: 75%;
  background: #15a374;
  padding: 50px 20px;
  border: 6px;
`;

export const Message = styled.p`
  margin-bottom: 0.5em;
  display: block;
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
