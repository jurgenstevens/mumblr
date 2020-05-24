import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <h1>mumblr</h1>
    </MainContainer>
  );
};

export default Header;

// This is the main container using styled-components
const MainContainer = styled.header`
  background: url(../../images/mumblrheader.png) no-repeat center/cover;
  height: 25rem;
`;

// S24: Type 'npm i styled-components' in terminal to install in this component
