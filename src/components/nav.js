import React, { useState, useEffect } from "react";
import styled from "styled-components";
//Custom
import { mediaQueries } from "../styles/GlobalStyle";
import { debounce } from "../utils/helpers";
import logo from "../images/cmlogo.svg";
import BurguerMenu from "./burguer";
import Aside from "./aside";

export const Nav = styled.div`
  display: block;
  width: 100%;
  height: 65px;
  z-index: 3;
  position: fixed;
  background-color: #152c3e;
  transition: top 0.5s ease-in-out;
  animation-delay: 200ms;
`;

export const Logo = styled.img`
  position: absolute;
  cursor: pointer;
  left: 1rem;
  top: 6px;

  &:hover {
    transform: scale(0.95);
  }
  ${mediaQueries("md")`
   padding: 0 0 0 40px;
   opacity: 0.8;
   transform: scale(0.9);
   
  ;`}
`;

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 50) ||
        currentScrollPos < 10
    );
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    if (open && window.outerWidth <= "768") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  const scrollTop = () => {
    document.body.scrollTop = 20;
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <Nav id="nav" style={{ top: visible ? "0" : "-160px" }} open={open}>
      <Logo onClick={scrollTop} src={logo} />
      <BurguerMenu open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurguerMenu>
      <Aside closeNav={closeNav} open={open} />
    </Nav>
  );
};
export default NavBar;
