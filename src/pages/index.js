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
import Social from "../Social";

const Container = styled.article`
  padding: 0 1.5625rem 0 1.5625rem;
  margin: auto;

  ${mediaQueries("md")`
    margin: 0px auto;
    width: 100%;  
    min-height: 100vh;   
    padding: 80px 250px;
    max-width: 1600px;
  `}
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <title>Cibelle Montor Portfolio</title>
      <NavBar />
      <Social />
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
