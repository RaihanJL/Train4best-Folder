import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar mx-5 px-5 pt-4 pb-4">
          <div className="left-section">
            <a href="/">
              <img
                className="left-image"
                src="/assets/train4best-blue-no-bg.png"
                alt="Train4best Logo"
              />
            </a>
          </div>

          <div className="dropdown-section d-flex align-items-center ">
            <div>
              <img src="../assets/image 4.png" alt="User" />
            </div>
            <Link to={"/Profile"} style={{ textDecoration: "none" }}>
              <p
                className="middle-button "
                style={{ margin: "0", marginLeft: "10px", cursor: "pointer" }}
              >
                Admin
              </p>
            </Link>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                className="custom-dropdown"
              >
                <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/History">History</NavDropdown.Item>
                <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
