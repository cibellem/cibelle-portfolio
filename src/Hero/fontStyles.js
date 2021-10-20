import { createGlobalStyle } from "styled-components";
import OpenSans from "./fonts/OpenSans";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'OpenSans';
  src: url(${OpenSans}) format('ttf'),
     
}
`;

export default FontStyles;
