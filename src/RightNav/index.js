import React from "react";
import Ul from "./Styles";
import { Link } from "react-scroll";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="projects" spy={true} smooth={true} duration={900}>
        Projects
      </Link>
      <Link to="skills" spy={true} smooth={true} duration={1000}>
        Skills
      </Link>
      <Link to="about" spy={true} smooth={true} duration={1500}>
        About Me
      </Link>
      <Link to="contact" spy={true} smooth={true} duration={1000}>
        Contact
      </Link>
    </Ul>
  );
};

export default RightNav;
