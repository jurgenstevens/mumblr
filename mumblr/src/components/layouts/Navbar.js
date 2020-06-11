import React from "react";
// S67: Change anchor tags to Link Containers by importing them
import { Link } from "react-router-dom";
import styled from "styled-components";

// S25: Copy and paste code below from Navbar Bootstrap site. Make adjustments if necessary.
// S26: Navbar file is exporting here but make sure to import it in App.js
// S28: Import styled components and add Navbar color and navbar links hover color
// S29: Then that will be exported to App.js
// S57: Add a "Create Post" button for the Navbar and add the same bootstrap classNames as the listed items in the ul for the navbar
// S58: Switch back over to the Posts.js component.
// S66: Change the "to" attribute for Create Post anchor tag to "/add-post" below.
const Navbar = () => {
  return (
    <NavbarContainer>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          mumblr.
        </Link>
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
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-post">
                Create Post
              </Link>
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
    &:hover {
      background: var(--light-blue);
    }
  }
`;
