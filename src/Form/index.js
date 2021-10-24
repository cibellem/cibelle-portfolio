import * as React from "react";
import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const FormGroup = styled.div`
  display: block;
  width: 100%;
  background: #8edfbd;
  padding: 50px 20px;

  ${mediaQueries("md")`
    width: 50%;
    
  `}
`;

export const Label = styled.label`
  margin-bottom: 0.2em;
  font-size: 0.8rem;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  /* background: #ffefd578; */
  /* border: none; */
  border-radius: 2px;
  width: 100%;
  margin-bottom: 0.5em;
  border: 1px solid;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  display: block;
`;

export const Button = styled.button`
  display: block;
  border: none;
  padding: 10px 20px;
  width: 80%;
  margin: auto;
  border-radius: 47px;
  background: white;
  box-shadow: -1px 6px 0px 0px;
  &:hover {
    box-shadow: -1px 3px 0px 0px;
    transition: 0.4s;
  }
`;

const Form = () => {
  return (
    <FormGroup>
      <Label htmlFor="name">Name</Label>
      <Input id="name" />
      <Label htmlFor="email">Email</Label>
      <Input id="email" />
      <Label htmlFor="name">Label</Label>
      <Input id="name" />
      <Message>This is the validation message</Message>
      <Button>Submit </Button>
    </FormGroup>
  );
};

export default Form;
