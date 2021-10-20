import * as React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: block;
  display: table-caption;
  caption-side: bottom;
`;

const NavItem = styled.li`
  list-style-type: none;
  color: red;
  display: inline-block;
  padding: 0 5px;
  font-size: 1.2em;
`;

const NavBar = () => {
  return (
    <Nav>
      <NavItem>About Me</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Skills</NavItem>
      <NavItem>Contact</NavItem>
    </Nav>
  );
};
export default NavBar;
