import React from "react";
import Ul from "./Styles";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Projects</li>
      <li>Skills</li>
      <li>About Me</li>
      <li>Contact</li>
    </Ul>
  );
};

export default RightNav;
