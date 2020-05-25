import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <h1>mumblr!</h1>
    </MainContainer>
  );
};

export default Header;

// S24: Type 'npm i styled-components' in terminal to install in this component
// This is the main container using styled-components
const MainContainer = styled.header`
  background: url(../../images/mumblrthoughtheader.png) no-repeat center/cover;
  height: 20rem;

  h1 {
    transform: translate(-50%, -50%);
    color: #000;
    font-weight: 900;
    position: absolute;
    top: 22%;
    left: 52%;
    font-size: 60px;
  }
`;
