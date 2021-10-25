import styled from "styled-components";
import { mediaQueries } from "../styles/GlobalStyle";

export const BurguerMenu = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 3;

  button {
    position: absolute;
    top: 16px;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    &:focus {
      outline: none;
    }
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #15a374;
    margin: 2px 0;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 4px;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(1%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
    ${mediaQueries("md")`
    display:none
  `}
  }
`;

export default BurguerMenu;
