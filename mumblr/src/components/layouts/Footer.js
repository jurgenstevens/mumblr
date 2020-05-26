import React from "react";
import styled from "styled-components";

// S31: Import styled from styled-components and follow the same steps as the Navbar.

const Footer = () => {
  return <FooterContainer></FooterContainer>;
};

export default Footer;

// footer container
const FooterContainer = styled.footer`
  background: var(--navbar-blue);
  height: 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
