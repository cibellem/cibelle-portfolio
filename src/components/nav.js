import React, { useState, useEffect } from "react";
import Aside from "./aside";
import logo from "../assets/clogo.png";
import styled from "styled-components";
import { mediaQueries } from "../styles/GlobalStyle";

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
    background:  #15a374;
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

const show = {
  top: "0",
  backgroundColor: "#0d2538ed",
  backdropFilter: "blur(3px)",
};

const hide = {
  top: "-160px",
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (open && window.outerWidth >= "768") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  if (isBrowser) {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      //once scrolled set window position to current one and compare previous to current
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setShowNav(true);
      } else {
        setShowNav(false);
        prevScrollpos = currentScrollPos;
      }
    };
  }

  const scrollTop = () => {
    document.body.scrollTop = 20;
  };

  const closeNav = () => {
    setOpen(!open);
  };

  return (
    <Nav id="nav" style={showNav ? show : hide} open={open}>
      <Logo onClick={scrollTop} src={logo} />
      <button open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <Aside closeNav={closeNav} open={open} />
    </Nav>
  );
};
export default NavBar;
