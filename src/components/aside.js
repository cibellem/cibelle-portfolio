import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  float: right;
  padding: 0 40px 0 0;
  a {
    font-size: 1.2rem;
    padding: 10px 16px;
    cursor: pointer;
    color: #7f7f7f;

    &:hover {
      transform: translateY(-5px);
      transition: ease-out 0.2s;
      border-bottom: 5px solid #15a374;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538ed;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    margin: 0;
    height: 100vh;
    width: 257px;
    padding-top: 3.5rem;
    transition: ease-out transform 1s cubic-bezier(0.8, -0.5, 0.2, 1.4);
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
      <Link
        onClick={closeNav}
        to="projects"
        spy={true}
        smooth={true}
        duration={900}
      >
        Projects
      </Link>
      <Link
        onClick={closeNav}
        to="skills"
        spy={true}
        smooth={true}
        duration={1000}
      >
        Skills
      </Link>
      <Link
        onClick={closeNav}
        to="about"
        spy={true}
        smooth={true}
        duration={1500}
      >
        About Me
      </Link>
      <Link
        onClick={closeNav}
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
      >
        Contact
      </Link>
    </Ul>
  );
};

export default Aside;
