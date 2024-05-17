import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Use named import for jwt-decode
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken); // Use the named import
      setName(decoded.name);
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="">
        <div className="navbar mx-5 px-5 pt-4 pb-4">
          <div className="left-section">
            <a href="/Home">
              <img
                className="left-image"
                src="/assets/train4best-blue-no-bg.png"
                alt="Train4best Logo"
              />
            </a>
          </div>
          <div className="middle-section">
            <ul className="middle-button">
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Catalog">Catalog</a>
              </li>
              <li>
                <a href="/Courselist">Courses</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
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
                {name}
              </p>
            </Link>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                className="custom-dropdown"
              >
                <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/History">History</NavDropdown.Item>
                <NavDropdown.Item onClick={Logout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
