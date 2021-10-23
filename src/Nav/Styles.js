import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const Nav = styled.nav`
  button {
    position: absolute;
    top: 3%;
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
    z-index: 10;

    &:focus {
      outline: none;
    }
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: rgba(14, 248, 151, 0.26);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }

     ${mediaQueries("md")`
      display:none
  `}}}
`;

export const Logo = styled.img`
  position: absolute;
  left: 1rem;
  top: 1.5%;
`;
