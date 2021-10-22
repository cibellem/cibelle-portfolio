import * as React from "react";
import styled from "styled-components";
import logo from "./clogo.png";

const Nav = styled.nav`
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
  }
`;

const NavItem = styled.li`
  list-style-type: none;
  color: red;
  display: inline-block;
  padding: 0 5px;
  font-size: 1.2em;
  display: none;
`;

const Logo = styled.img`
  position: absolute;
  left: 1rem;
  top: 2%;
`;

const NavBar = () => {
  return (
    <Nav>
      <NavItem>About Me</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Skills</NavItem>
      <NavItem>Contact</NavItem>

      <Logo src={logo} />

      <button>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </Nav>
  );
};
export default NavBar;
