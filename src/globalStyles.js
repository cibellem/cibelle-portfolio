import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60,
};

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: "Josefin Sans";
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {   
   font-family: "Josefin Sans";
	height: 100vh;   
  text-rendering: optimizeLegibility;
  }
  `;
