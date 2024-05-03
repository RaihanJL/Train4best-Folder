import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Navbarlanding = () => {
  return (
    <>
      <nav className="">
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
          <div className="right-side">
            <Link to={"/Login"}>
              <button className="fw-bold">LOGIN</button>
            </Link>

            <Link to={"/Register"}>
              <button className="fw-bold"> REGISTER</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbarlanding;
