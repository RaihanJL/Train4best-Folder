import React from "react";
import Footer from "../Component/Footer";
import Navbarlanding from "../Component/Navbarlanding";
const LandingPage = () => {
  return (
    <>
      <Navbarlanding />
      <div className="container jumb-container">
        <div className="jumbotron">
          <div className="jumb-header">
            <h1>Welcome To</h1>
          </div>
          <div className="jumb-img">
            <img
              className="mid-img"
              src="../assets/train4best-mid.png"
              alt="Jumbotron Image"
            />
          </div>
          <div className="jum-msg">
            <p>Website for Catalog Train4best’s Products and e-learning</p>
          </div>
        </div>
        <div className="jumbo-image">
          <img src="../assets/girl pic.png" alt="Girl" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
