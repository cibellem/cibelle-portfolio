import React from "react";
import NavBar from "../components/nav";
import Projects from "../components/sections/projects";
import Footer from "../components/footer";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Skills from "../components/sections/skills";
import Social from "../components/social";
import { Container, GlobalStyles } from "../styles/GlobalStyle";

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
