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

  a {
    color: var(--purpleDetails)
  }
  
  svg {
    font-size: 1.6em;
    color: var(--purpleDetails)

    &:hover {
      color: var(--purpleDetails)
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
