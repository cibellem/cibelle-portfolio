import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #05222d;
  margin: 30px 0 0 0;
  padding: 20px 0;

  span {
    font-size: 0.8rem;
    color: whitesmoke;
    margin: 0;
    padding: 0;
  }

  p {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        Designed and developed by Cibelle Montor{" "}
        <span style={{ fontSize: "14px" }}>&#10024;</span>
      </span>
      <span> ©{new Date().getFullYear()} Copyright</span>
    </StyledFooter>
  );
};

export default Footer;
