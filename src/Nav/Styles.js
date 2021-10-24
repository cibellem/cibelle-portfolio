import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const Nav = styled.div`
  display:block;
  width:100%;
  position: fixed;
  height: 65px;
  z-index:3;
 

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
    z-index: 3;

    &:focus {
      outline: none;
    }
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: #0ef897;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

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
     
  `}}}

  ${mediaQueries("md")`
  position: fixed;
  transition:0.2s ;
  display:block;
  width:100%;
  z-index:3

  ;`}

 
`;

export const Logo = styled.img`
  position: absolute;
  cursor: pointer;
  left: 1rem;
  top: 1.5%;

  &:hover {
    transform: scale(0.95);
  }

  ${mediaQueries("md")`
   padding: 0 0 0 40px;
  ;`}
`;
