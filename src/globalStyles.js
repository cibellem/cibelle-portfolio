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

  & .marker {
     position: relative;
    
     &:before {
    content: "";
    background-color: #fbf0f0;
    width: 100%;
    height: 1em;
    position: absolute;
    z-index: -1;
    left: -0.25em;
    top: 0.1em;
    padding: 0 0.25em;
  }

  

  ${mediaQueries("md")`
  font-size: 2.5rem;
  ;`}

  }
  `;
