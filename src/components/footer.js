import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: black;
  margin-top: 30px;
  padding: 20px 0;

  span {
    font-size: 0.7rem;
    color: var(--gray);
    margin: 0;
    padding: 0;
  }

  p {
    color: white;
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Cibelle Montor</p>
      <span>© 2021 Copyright</span>
    </StyledFooter>
  );
};

export default Footer;
