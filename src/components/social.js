import React from "react";
import styled from "styled-components";
import { links } from "../utils/data";

const StyledSocial = styled.div`
  display: flex;
  width: 40px;
  position: inherit;

  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
  }
  li {
    list-style: none;
    margin-right: 20px;
  }
  svg {
    font-size: 1.6em;
    color: #15a374;

    &:hover {
      color: rgba(13, 37, 56, 0.93);
    }
  }
`;

const Social = () => {
  return (
    <StyledSocial>
      <ul>
        {links.map((item) => (
          <li>
            <a href={item.href} aria-label={item.ariaLabel}>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </StyledSocial>
  );
};

export default Social;
