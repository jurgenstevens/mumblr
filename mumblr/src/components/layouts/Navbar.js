import React from "react";
import styled from "styled-components";

// S25: Copy and paste code below from Navbar Bootstrap site. Make adjustments if necessary.
// S26: Navbar file is exporting here but make sure to import it in App.js
// S28: Import styled components and add Navbar color and navbar links hover color

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
          mumblr
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;

// Main Navbar container
const NavbarContainer = styled.div`
  background: var(--navbar-blue);
  .nav-link {
    color: #fff !important;
  }
`;