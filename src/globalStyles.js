import styled, { createGlobalStyle } from "styled-components";

export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60,
};

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};

// export const header = {
//   h1: "20px",
//   h2: "10px",
//   lg: 45,
//   xl: 60,
// };

// export const Header = (key) => {
//   return (style) => `${key}{ ${`font-size: key`} }`;
// };

// }
export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
  box-sizing: border-box;
  }

  html, body {
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  }

  body {   
  font-family: "Josefin Sans";
	height: 100vh;   

  }

  li, a {
    text-decoration:none;
  }

  & .marker {
     position: relative;
    
    &:before {
    content: "";
    background-color: rgb(13 37 56 / 12%);
    width: 100%;
    height: 1em;
    position: absolute;
    z-index: -1;
    left: -0.25em;
    top: 0.1em;
    padding: 0 0.25em;
  }
  }
  `;

const defaultTheme = {
  black: "#11111",
};

// === Hero Section ===
export const HeroHeader = styled.h1`
  font-size: clamp(32px, 8vw, 60px);
  color: ${defaultTheme.black};
  margin: 0;
  line-height: 1.2;
`;

export const HeroSubHeader = styled.h2`
  font-size: clamp(32px, 8vw, 50px);
  color: ${defaultTheme.black};
  margin: 0;
  line-height: 1.2;
`;

// == Headers ==

export const HeaderFour = styled.h4`
  font-size: clamp(1rem, 8vw, 1.2rem);
  color: ${defaultTheme.black};
  margin: 0 0 10px 0;
  line-height: 1.2;
`;

export const LargeText = styled.p`
  font-size: clamp(1rem, 5vw, 1.6rem);
  color: ${defaultTheme.black};
  margin: 10px 0 0 0;
  line-height: 1.4;

  ${mediaQueries("md")`
    max-width:80%
  ;`}
`;
