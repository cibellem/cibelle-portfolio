import React from "react";
import styled from "styled-components";
import { links } from "../utils/data";
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
  top:45%;
  z-index: 10;
  heigth: 100%;


  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
  }
  li {
    list-style: none;
    margin: 15px 0;

    &:hover {
      transform:translateX(50px);
      transition: ease-in-out 3s;
      transition-delay: 150ms;
     
    }
  }
  svg {
    font-size: 1.6em;
    color: #15a374;

	  &:hover {
		color:rgba(13, 37, 56, 0.93)
	}};`};
`;

const Social = () => {
  return (
    <StyledSocial orientation="left">
      <ul>
        {links.map((item) => (
          <li>
            <a href={item.href}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </StyledSocial>
  );
};

export default Social;
