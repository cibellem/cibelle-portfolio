import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";
import { mediaQueries } from "../styles/GlobalStyle";

const StyledSocial = styled.div`
  display: none;

  ${mediaQueries("md")`
  display: block;
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 30px;
  right: auto;
  z-index: 10;

  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
  }

  li {
    list-style: none;
    margin: 15px 0;
    &:hover {
      transform: translateY(-10px);
      transition: ease-in-out;
      transition-delay: 100ms;
      transition-duration: 300ms;
    }
  }

  svg {
    font-size: 1.6em;
    color: rgb(13 37 56 / 59%);
	  &:hover{
		color:rgba(13, 37, 56, 0.93)
	}};`};
`;

const Social = () => {
  return (
    <StyledSocial orientation="left">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/cibelle-montor-2a1a58157/">
            <FaLinkedinIn />
          </a>
        </li>{" "}
        <li>
          <a href="https://github.com/cibellem">
            <FaGithub />
          </a>
        </li>{" "}
        <li>
          <a href="mailto:montorcibelle@gmail.com">
            {" "}
            <FaMailBulk />
          </a>
        </li>
      </ul>
    </StyledSocial>
  );
};

export default Social;
