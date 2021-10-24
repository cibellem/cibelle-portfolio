import React, { useState, useEffect } from "react";
import { Nav, Logo } from "./Styles";
import RightNav from "../RightNav";
import logo from "./clogo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const [showNav, setShowNav] = useState(false);
  let prevScrollpos = window.pageYOffset; //initial scroll position

  const scrollTop = () => {
    document.body.scrollTop = 20;
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  const show = {
    top: "0",
    backgroundColor: "#0d2538ed",
    backdropFilter: "blur(3px)",
  };

  const hide = {
    top: "-160px",
  };

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

  return (
    <Nav id="nav" style={showNav ? show : hide} open={open}>
      <Logo onClick={scrollTop} src={logo} />
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
