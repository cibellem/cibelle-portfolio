import * as React from "react";
import styled from "styled-components";
import NavBar from "../Nav/index";
import { mediaQueries, GlobalStyles } from "../globalStyles";
import Burger from "../Menu";
import Hero from "../Hero";
import Projects from "../Projects";
import Footer from "../Footer";
import About from "../About";
import Contact from "../Contact";

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
        <Projects />
        <About />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default IndexPage;
