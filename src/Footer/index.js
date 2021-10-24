import * as React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 20px 0;
  span {
    font-size: 0.7rem;
    color: silver;
    margin: 0;
    padding: 0;
  }
`;

const Text = styled.p`
  color: #ffff;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>Cibelle Montor</Text>
      <span>© 2021 Copyright</span>
    </FooterWrapper>
  );
};

export default Footer;
