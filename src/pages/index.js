import React from "react";
import styled from "styled-components";
import NavBar from "../Nav/index";
import { mediaQueries, GlobalStyles } from "../globalStyles";
import Hero from "../Hero";
import Projects from "../Projects";
import Footer from "../Footer";
import About from "../About";
import Contact from "../Contact";
import Skills from "../Skills";

const Container = styled.article`
  padding: 0 1.5625rem 0 1.5625rem;
  margin: auto;

  ${mediaQueries("md")`
  width: 80%
    margin: 0px auto;
    width: 100%;
    /* max-width: 1600px; */
    min-height: 100vh;
    padding: 200px 150px;
  `}
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <title>Cibelle Montor Portfolio</title>
      <NavBar />
      <Container>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default IndexPage;
