import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import resume from "../Assets/resume.pdf";

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  float: right;
  list-style: none;
  padding: 0 40px 0 0;

  a {
    font-size: 1.2rem;
    padding: 10px 16px;
    cursor: pointer;
    color: #7f7f7f;

    &:hover {
      transform: translateY(-5px);
      transition: ease-out 0.3s;
      border-bottom: 5px solid #15a374;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #152c3e;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    margin: 0;
    height: 100vh;
    width: 257px;
    padding-top: 3.5rem;
    transition: transform 500ms ease-in-out;
    transition-delay: 150ms;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    z-index: 2;
    a {
      color: #fff;
      &:hover {
        transform: none;
        transition: ease-out 0.2s;
        border-bottom: 3px solid #0ef897;
      }
    }
  }
`;

const Aside = ({ open, closeNav }) => {
  return (
    <Ul open={open}>
      <li>
        {" "}
        <Link
          onClick={closeNav}
          to="projects"
          spy={true}
          smooth={true}
          duration={900}
        >
          Projects
        </Link>
      </li>
      <li>
        {" "}
        <Link
          onClick={closeNav}
          to="skills"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Skills
        </Link>
      </li>
      <li>
        {" "}
        <Link
          onClick={closeNav}
          to="about"
          spy={true}
          smooth={true}
          duration={1500}
          offset={-80}
        >
          About Me
        </Link>
      </li>

      <li>
        {" "}
        <Link
          onClick={closeNav}
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          Contact
        </Link>
      </li>

      <li>
        {" "}
        <a href={resume}>Resume</a>
      </li>
    </Ul>
  );
};

export default Aside;
