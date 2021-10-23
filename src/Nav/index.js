import React, { useState } from "react";
import { Nav, Logo } from "./Styles";
import RightNav from "../RightNav";
import logo from "./clogo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav open={open}>
      <Logo src={logo} />
      <button open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <RightNav open={open} />
    </Nav>
  );
};
export default NavBar;
