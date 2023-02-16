import React from "react";
import NavBar from "../components/nav";
import Projects from "../components/sections/projects";
import Footer from "../components/footer";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Skills from "../components/sections/skills";
import Social from "../components/social";
import { Helmet } from "react-helmet";
import { Container, GlobalStyles } from "../styles/GlobalStyle";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <title>Cibelle Montor | Dev</title>
        <link rel="canonical" href="https://cibellemontor.com" />
      </Helmet>

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
