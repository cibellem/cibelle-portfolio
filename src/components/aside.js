import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import resume from "../Assets/resume.pdf";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

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
    transition: ease-out transform 1.5s cubic-bezier(0.8, -0.5, 0.2, 1.4);
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

const linksArr = ["projects", " skills", "about me", "contact"];

const Aside = ({ open, closeNav }) => {
  return (
    <Ul open={open}>
      {linksArr.forEach((item) => (
        <Link
          onClick={closeNav}
          spy={true}
          smooth={true}
          duration={900}
          to={item}
        >
          {item}
        </Link>
      ))}
      <a
        onClick={(e) => {
          // To stop the page reloading
          e.preventDefault();
          // Lets track that custom click
          trackCustomEvent({
            // string - required - The object that was interacted with (e.g.video)
            category: "Special Button",
            // string - required - Type of interaction (e.g. 'play')
            action: "Click",
            // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
            label: "Gatsby Plugin Example Campaign",
            // number - optional - Numeric value associated with the event. (e.g. A product ID)
            value: 43,
          });
        }}
        href={resume}
      >
        Resume
      </a>
    </Ul>
  );
};

export default Aside;
