import React from "react";
import styled from "styled-components";
import logo from "../../bluemumblrlogo02.png";

const Header = () => {
  return (
    <MainContainer>
      <img
        style={{
          width: "250px",
          position: "absolute",
          top: "20%",
          left: "35%",
        }}
        src={logo}
        alt="logo"
      />
    </MainContainer>
  );
};

export default Header;

// S24: Type 'npm i styled-components' in terminal to install in this component
// This is the main container using styled-components
const MainContainer = styled.header`
  background: url(../../images/bluewaveheader.png) no-repeat center/cover;
  height: 15rem;
`;
