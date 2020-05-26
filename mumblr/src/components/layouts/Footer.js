import React from "react";
import styled from "styled-components";

// S31: Import styled from styled-components and follow the same steps as the Navbar.
// S33: Add the Copyright and current date of the copyright by using the Date method
const Footer = () => {
  return (
    <FooterContainer>
      <span>&copy;{new Date().getFullYear()}All Rights Reserved. Mumblr.</span>
    </FooterContainer>
  );
};

export default Footer;

// S32: Add background color, height, and place it to the bottom at 100%
const FooterContainer = styled.footer`
  background: var(--navbar-blue);
  height: 4rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  span {
    color: white;
  }
`;
