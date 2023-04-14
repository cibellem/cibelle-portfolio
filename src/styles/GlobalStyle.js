import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import colors from "./colors";

export const GlobalStyles = createGlobalStyle`

  ${colors};

  *, *::after, *::before {
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  background:#fefefe

  }

  body {   
  font-family: "Josefin Sans";
	height: 100vh;   

  }

  input , textarea{
  padding: 0.5em;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 0.5em;
  border: 1px solid;

  }

  label {
  margin-bottom: 0.2em;
  font-size: 0.9rem;
  display: block;
  font-weight:400;
  text-transform: uppercase;

  }

  
  h2, h4, h5, h6 {
    margin: 0 0 10px 0;
    line-height: 1.2;   

  }

  p {
  color: var(--charcoal); 
  margin: 10px 0 0 0;
  line-height: 1.4;

  }

  // & .marker {
  //   position: relative;
  //   &:before {
  //   content: "";
  //   background-color: var(--purpleDetails);
  //   width: 100%;
  //   height: 1em;
  //   position: absolute;
  //   z-index: -1;
  //   left: -0.25em;
  //   top: 0.1em;
  //   padding: 0 0.25em;
  // }
  // }

  .flex {
    display: flex;
  }

  .justify-space-evenly {
    justify-content: space-evenly;
  `;

export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60,
};

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};

export const Container = styled.article`
  padding: 0 1.5625rem 0 1.5625rem;
  max-width: 1600px;
  width: 100%;
  margin: auto;
  min-height: 100vh;

  ${mediaQueries("sm")`      
  padding: 0px 25px;

  `}
  ${mediaQueries("md")`      
  padding: 0px 50px;

  `}
  ${mediaQueries("lg")`      
  padding: 0px 80px;

  `}
`;
