import React, { useState } from "react";
import styled from "styled-components";
//Custom
import { mediaQueries } from "../styles/GlobalStyle";
import logo from "../images/cmlogo.svg";
import BurguerMenu from "./burguer";

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1rem;
  font-size: 1.3rem;
  background: var(--deepPurple);
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    margin-left: 1rem;
    border: 2px solid var(--purpleDetails);
    border-radius: 10px;
  }

  a {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: var(--pink);
  }
`;

export const Logo = styled.img`
  position: absolute;
  cursor: pointer;
  left: 1rem;
  top: 12px;
  width: 40px;

  ${mediaQueries("md")`
   padding: 0 0 0 40px;
   opacity: 0.8;
   transform: scale(0.8);
   width: auto; 
   top: 6px;

  ;`}
`;

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const sendTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Logo onClick={sendTop} src={logo} alt="" />
      <Nav role="navigation" open={open}>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <BurguerMenu open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </BurguerMenu>
        {/* <Aside open={open} /> */}
      </Nav>
    </>
  );
};
export default NavBar;
