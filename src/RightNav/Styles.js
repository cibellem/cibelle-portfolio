import styled from "styled-components";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  float: right;
  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
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
    li {
      color: #fff;
    }
  }
`;

export default Ul;
