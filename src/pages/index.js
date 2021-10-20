import * as React from "react";
import styled from "styled-components";
import NavBar from "../Nav/index";
import { mediaQueries, GlobalStyles } from "../globalStyles";
import Burger from "../Menu";
import Hero from "../Hero";

const Container = styled.article`
  padding: 0 1.5625rem 0 1.5625rem;
  margin: auto;
`;

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <title>Home Page</title>
      <Container>
        <Hero />
      </Container>
    </>
  );
};

export default IndexPage;
