import React, { useState } from "react";
import styled from "styled-components";
//Custom
import { mediaQueries } from "../styles/GlobalStyle";
import logo from "../images/cmlogo.svg";

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1.5rem 2rem;
  font-size: 1rem;
  background: var(--gray);
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */

  ${mediaQueries("md")`    
  font-size: 1.3rem;
  position: fixed; /* Set the navbar to fixed position */
`}

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
    border-radius: 20px;

    ${mediaQueries("md")`    
    margin-left: 1rem;
    border: 2px solid var(--pink);
  `}
  }

  a {
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    color: var(--purpleDetails);
    ${mediaQueries("md")`    
    padding: 0.5rem 1rem;
  `};
  }
`;

export const LogoWrapper = styled.div`
  margin-right: 0;
  position: absolute;
  left: 0;
`;

export const Logo = styled.img`
  cursor: pointer;
  left: 1rem;
  top: 12px;
  width: 80px;

  ${mediaQueries("md")`
   padding: 0 0 0 40px;
   transform: scale(1);
   width: auto; 
   top: 6px;

  ;`}
`;

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const closeNav = () => {
    setOpen(false);
  };

  const sendTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Nav role="navigation" open={open}>
        <LogoWrapper>
          <Logo onClick={sendTop} src={logo} alt="" />
        </LogoWrapper>
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
        {/* <BurguerMenu open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </BurguerMenu>
        <Aside closeNav={closeNav} open={open} /> */}
      </Nav>
    </>
  );
};
export default NavBar;
